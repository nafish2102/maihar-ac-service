"use client";

import { useState, type FormEvent } from "react";
import { appliances, whatsappLink } from "../../lib/site-data";
import { Icon } from "../icons";

const field =
  "h-14 w-full rounded-lg border border-line bg-white px-4 text-base text-ink outline-none transition-colors placeholder:text-[#9ba9ad] focus:border-brand focus:ring-2 focus:ring-brand/20 sm:h-12 sm:text-sm";

export function BookingForm() {
  const [name, setName] = useState("");
  const [appliance, setAppliance] = useState(appliances[0]);
  const [problem, setProblem] = useState("");

  // No data is stored: the form only prepares a WhatsApp message to send.
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hello, I would like to book a service.",
      name && `Name: ${name}`,
      `Appliance: ${appliance}`,
      problem && `Problem: ${problem}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">Your name</span>
        <input
          autoComplete="name"
          className={field}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          type="text"
          value={name}
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">Appliance</span>
        <select
          className={field}
          onChange={(event) => setAppliance(event.target.value)}
          value={appliance}
        >
          {appliances.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">
          What is the problem?
        </span>
        <textarea
          className={`${field} h-28 py-3 sm:h-28`}
          onChange={(event) => setProblem(event.target.value)}
          placeholder="Brand, model and what is going wrong"
          value={problem}
        />
      </label>
      <button
        className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand text-base font-semibold text-white transition-colors hover:bg-brand-dark sm:h-12 sm:text-sm"
        type="submit"
      >
        <Icon className="size-[18px]" name="whatsapp" />
        Send booking on WhatsApp
      </button>
      <p className="text-center text-xs text-muted">
        Opens WhatsApp with your details ready to send.
      </p>
    </form>
  );
}
