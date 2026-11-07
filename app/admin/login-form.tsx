"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "./actions";

export function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(
    loginAction,
    {},
  );
  return (
    <form action={action} className="space-y-4">
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">Admin password</span>
        <input
          autoComplete="current-password"
          className="h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          name="password"
          required
          type="password"
        />
      </label>
      {state.error && (
        <p className="text-sm text-red-700" role="alert">
          {state.error}
        </p>
      )}
      <button
        className="h-12 w-full rounded-full bg-brand text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
        disabled={pending}
        type="submit"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
