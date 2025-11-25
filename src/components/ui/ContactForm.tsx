"use client";

import { useState } from "react";
import clsx from "clsx";

import { ActionLink } from "@/components/ui/ActionLink";

type StatusState = {
  type: "success" | "error" | null;
  message: string;
};

type FormData = {
  name: string;
  email: string;
  number: string;
  message: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [status, setStatus] = useState<StatusState>({ type: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus({
        type: "success",
        message: "Thanks for reaching out! We'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Network error. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#f5f5dc] placeholder:text-[#f5f5dc]/40 focus:border-[#83caaf] focus:outline-none focus:ring-2 focus:ring-[#83caaf]/40 transition";

  return (
    <form onSubmit={handleSubmit} className="glass-panel space-y-5 rounded-[32px] border border-white/10 p-8" data-animate>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs uppercase tracking-[0.3em] text-[#83caaf]">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
          placeholder="What's your name?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-[#83caaf]">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="We'll keep it private."
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="number" className="text-xs uppercase tracking-[0.3em] text-[#83caaf]">
          Phone Number
        </label>
        <input
          id="number"
          name="number"
          type="tel"
          value={formData.number}
          onChange={handleChange}
          className={inputClasses}
          placeholder="+91 00000 00000"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-[#83caaf]">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className={clsx(inputClasses, "min-h-[140px] resize-none")}
          placeholder="Tell us about your project, goals, or timeline."
        />
      </div>

      {status.message ? (
        <div
          className={clsx(
            "rounded-2xl border px-4 py-3 text-sm",
            status.type === "success"
              ? "border-[#83caaf]/40 text-[#83caaf]"
              : "border-[#ec2021]/30 text-[#ec2021]"
          )}
        >
          {status.message}
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={submitting}
          className={clsx(
            "inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ec2021] via-[#ec2021] to-[#83caaf] text-sm font-semibold uppercase tracking-wide text-[#f5f5dc] transition-all duration-300",
            submitting && "opacity-70"
          )}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
        <ActionLink
          href="tel:+917304008137"
          label="Call Studio"
          variant="ghost"
          className="w-full justify-center"
        />
      </div>
    </form>
  );
}


