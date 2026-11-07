import "server-only";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

// Uploaded business photos live outside /public so they can be added at runtime.
// Set GALLERY_DIR to a persistent volume in production.
const dir = process.env.GALLERY_DIR ?? path.join(process.cwd(), "data", "gallery");
const manifestPath = path.join(dir, "manifest.json");

export const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
export const NAME_PATTERN = /^[a-f0-9-]{36}\.(jpg|png|webp)$/;

export type GalleryItem = {
  id: string;
  file: string;
  caption: string;
  createdAt: string;
};

const types = {
  jpg: { mime: "image/jpeg", check: (b: Buffer) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff },
  png: { mime: "image/png", check: (b: Buffer) => b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) },
  webp: { mime: "image/webp", check: (b: Buffer) => b.subarray(0, 4).toString() === "RIFF" && b.subarray(8, 12).toString() === "WEBP" },
} as const;

export function mimeForName(name: string) {
  const ext = name.split(".").pop() as keyof typeof types;
  return types[ext]?.mime ?? "application/octet-stream";
}

/** Identify an image by its real bytes, never by the client-supplied type. */
export function detectExtension(bytes: Buffer): keyof typeof types | null {
  for (const ext of Object.keys(types) as (keyof typeof types)[]) {
    if (types[ext].check(bytes)) return ext;
  }
  return null;
}

export async function readGallery(): Promise<GalleryItem[]> {
  try {
    const items = JSON.parse(await readFile(/*turbopackIgnore: true*/ manifestPath, "utf8")) as GalleryItem[];
    return items.filter((item) => NAME_PATTERN.test(item.file));
  } catch {
    return [];
  }
}

async function writeManifest(items: GalleryItem[]) {
  await mkdir(/*turbopackIgnore: true*/ dir, { recursive: true });
  const tmp = `${manifestPath}.${randomUUID()}.tmp`;
  await writeFile(/*turbopackIgnore: true*/ tmp, JSON.stringify(items, null, 2));
  await rename(/*turbopackIgnore: true*/ tmp, manifestPath);
}

export async function addGalleryItem(bytes: Buffer, ext: string, caption: string) {
  const id = randomUUID();
  const file = `${id}.${ext}`;
  await mkdir(/*turbopackIgnore: true*/ dir, { recursive: true });
  await writeFile(path.join(/*turbopackIgnore: true*/ dir, file), bytes);
  const items = await readGallery();
  await writeManifest([
    { id, file, caption, createdAt: new Date().toISOString() },
    ...items,
  ]);
}

export async function removeGalleryItem(id: string) {
  const items = await readGallery();
  const target = items.find((item) => item.id === id);
  if (!target) return;
  await writeManifest(items.filter((item) => item.id !== id));
  await unlink(path.join(/*turbopackIgnore: true*/ dir, target.file)).catch(() => {});
}

export async function readGalleryFile(name: string) {
  if (!NAME_PATTERN.test(name)) return null;
  try {
    return await readFile(path.join(/*turbopackIgnore: true*/ dir, name));
  } catch {
    return null;
  }
}
