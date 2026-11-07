import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { adminConfigured, isAdmin } from "../lib/admin-auth";
import { readGallery } from "../lib/gallery-store";
import { deletePhotoAction, logoutAction } from "./actions";
import { LoginForm } from "./login-form";
import { UploadForm } from "./upload-form";

export const metadata: Metadata = {
  title: "Gallery admin | Maihar AC Service Center",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-surface px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Link className="text-sm font-semibold text-brand hover:text-brand-dark" href="/">
          ← Back to website
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink">
          Gallery admin
        </h1>
        <Suspense fallback={<p className="mt-8 text-sm text-muted">Loading…</p>}>
          <AdminContent />
        </Suspense>
      </div>
    </main>
  );
}

async function AdminContent() {
  await connection(); // always evaluate env + session at request time
  if (!adminConfigured()) {
    return (
      <p className="mt-8 rounded-xl border border-line bg-white p-6 text-sm leading-6 text-muted">
        Admin is switched off. Set <b>ADMIN_PASSWORD</b> and{" "}
        <b>ADMIN_SESSION_SECRET</b> in the server environment to enable it.
      </p>
    );
  }
  if (!(await isAdmin())) {
    return (
      <div className="mt-8 max-w-sm rounded-xl border border-line bg-white p-6">
        <LoginForm />
      </div>
    );
  }

  const photos = await readGallery();
  return (
    <div className="mt-8 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-xl text-sm leading-6 text-muted">
          Upload genuine photos of your own work. They appear on the website
          under “From our workshop”. Only upload photos you took or own.
        </p>
        <form action={logoutAction}>
          <button className="h-11 rounded-full border border-line bg-white px-5 text-sm font-semibold text-ink hover:border-brand/40" type="submit">
            Sign out
          </button>
        </form>
      </div>

      <div className="rounded-xl border border-line bg-white p-6">
        <h2 className="text-lg font-semibold text-ink">Add a photo</h2>
        <UploadForm />
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink">
          Published photos ({photos.length})
        </h2>
        {photos.length === 0 ? (
          <p className="mt-3 text-sm text-muted">No photos uploaded yet.</p>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <li className="overflow-hidden rounded-xl border border-line bg-white" key={photo.id}>
                <div className="relative aspect-[4/3]">
                  <Image
                    alt={photo.caption || "Uploaded work photo"}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 100vw"
                    src={`/uploads/${photo.file}`}
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <p className="min-w-0 truncate text-sm text-ink">
                    {photo.caption || "No caption"}
                  </p>
                  <form action={deletePhotoAction}>
                    <input name="id" type="hidden" value={photo.id} />
                    <button className="h-10 shrink-0 rounded-full px-4 text-sm font-semibold text-red-700 hover:bg-red-50" type="submit">
                      Delete
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
