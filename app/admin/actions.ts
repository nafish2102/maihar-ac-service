"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  adminConfigured,
  clearFailures,
  endSession,
  isAdmin,
  passwordMatches,
  recordFailure,
  startSession,
  tooManyAttempts,
} from "../lib/admin-auth";
import { removeGalleryItem } from "../lib/gallery-store";

export type LoginState = { error?: string };

export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  if (!adminConfigured()) return { error: "Admin is not configured on this server." };

  const h = await headers();
  const key = h.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (tooManyAttempts(key)) {
    return { error: "Too many attempts. Please try again in 15 minutes." };
  }

  if (!passwordMatches(String(formData.get("password") ?? ""))) {
    recordFailure(key);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { error: "Incorrect password." };
  }

  clearFailures(key);
  await startSession();
  redirect("/admin");
}

export async function logoutAction() {
  await endSession();
  redirect("/admin");
}

export async function deletePhotoAction(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin");
  const id = String(formData.get("id") ?? "");
  if (/^[a-f0-9-]{36}$/.test(id)) await removeGalleryItem(id);
  revalidatePath("/admin");
}
