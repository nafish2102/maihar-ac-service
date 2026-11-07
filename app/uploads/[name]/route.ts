import { mimeForName, readGalleryFile } from "../../lib/gallery-store";

export async function GET(
  _request: Request,
  ctx: RouteContext<"/uploads/[name]">,
) {
  const { name } = await ctx.params;
  const bytes = await readGalleryFile(name);
  if (!bytes) return new Response("Not found", { status: 404 });

  return new Response(new Uint8Array(bytes), {
    headers: {
      "Content-Type": mimeForName(name),
      "Content-Security-Policy": "default-src 'none'",
      "X-Content-Type-Options": "nosniff",
      // File names are random and never reused, so they can be cached hard.
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
