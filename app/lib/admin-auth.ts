import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "maihar_admin";
const SESSION_SECONDS = 60 * 60 * 8;

export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET);
}

function sign(value: string) {
  return createHmac("sha256", process.env.ADMIN_SESSION_SECRET ?? "").update(value).digest("hex");
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function passwordMatches(candidate: string) {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  // Compare hashes so length differences do not leak through timing.
  return (
    expected.length > 0 &&
    safeEqual(sign(`pw:${candidate}`), sign(`pw:${expected}`))
  );
}

export async function startSession() {
  const expires = Date.now() + SESSION_SECONDS * 1000;
  const store = await cookies();
  store.set(COOKIE, `${expires}.${sign(String(expires))}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_SECONDS,
  });
}

export async function endSession() {
  (await cookies()).delete(COOKIE);
}

export function validToken(token: string | undefined) {
  if (!token || !adminConfigured()) return false;
  const [expires, signature] = token.split(".");
  if (!expires || !signature) return false;
  return Number(expires) > Date.now() && safeEqual(signature, sign(expires));
}

export async function isAdmin() {
  return validToken((await cookies()).get(COOKIE)?.value);
}

export const ADMIN_COOKIE = COOKIE;

// Small in-memory throttle for password guesses (per server process).
const failures = new Map<string, { count: number; first: number }>();
export function tooManyAttempts(key: string) {
  const entry = failures.get(key);
  if (!entry) return false;
  if (Date.now() - entry.first > 15 * 60 * 1000) {
    failures.delete(key);
    return false;
  }
  return entry.count >= 5;
}
export function recordFailure(key: string) {
  const entry = failures.get(key);
  if (!entry) failures.set(key, { count: 1, first: Date.now() });
  else entry.count += 1;
}
export function clearFailures(key: string) {
  failures.delete(key);
}
