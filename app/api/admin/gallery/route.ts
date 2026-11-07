import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE, validToken } from "../../../lib/admin-auth";
import {
  MAX_UPLOAD_BYTES,
  addGalleryItem,
  detectExtension,
} from "../../../lib/gallery-store";

export async function POST(request: NextRequest) {
  if (!validToken(request.cookies.get(ADMIN_COOKIE)?.value)) {
    return Response.json({ error: "Please sign in again." }, { status: 401 });
  }

  // CSRF defence in addition to the SameSite=Lax cookie.
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== request.headers.get("host")) {
    return Response.json({ error: "Request blocked." }, { status: 403 });
  }

  const form = await request.formData();
  const file = form.get("photo");
  const caption = String(form.get("caption") ?? "").trim().slice(0, 120);

  if (!(file instanceof File) || file.size === 0) {
    return Response.json({ error: "Choose a photo to upload." }, { status: 400 });
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return Response.json({ error: "Photo is larger than 8 MB." }, { status: 413 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = detectExtension(bytes);
  if (!ext) {
    return Response.json({ error: "Use a JPG, PNG or WebP image." }, { status: 415 });
  }

  await addGalleryItem(bytes, ext, caption);
  revalidatePath("/admin");
  return Response.json({ ok: true });
}
