"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export function UploadForm() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setBusy(true);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Upload failed.");
      form.reset();
      setMessage({ ok: true, text: "Photo published." });
      router.refresh();
    } catch (error) {
      setMessage({ ok: false, text: error instanceof Error ? error.message : "Upload failed." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="mt-4 grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end" onSubmit={onSubmit}>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">Photo (JPG, PNG or WebP, up to 8 MB)</span>
        <input
          accept="image/jpeg,image/png,image/webp"
          className="block w-full text-sm file:mr-3 file:h-12 file:rounded-xl file:border-0 file:bg-brand-light file:px-4 file:font-semibold file:text-brand"
          name="photo"
          required
          type="file"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">Caption</span>
        <input
          className="h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          maxLength={120}
          name="caption"
          placeholder="e.g. Split AC servicing in Maihar"
          type="text"
        />
      </label>
      <button
        className="h-12 rounded-full bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
        disabled={busy}
        type="submit"
      >
        {busy ? "Uploading…" : "Upload"}
      </button>
      {message && (
        <p className={`text-sm sm:col-span-3 ${message.ok ? "text-brand" : "text-red-700"}`} role="status">
          {message.text}
        </p>
      )}
    </form>
  );
}
