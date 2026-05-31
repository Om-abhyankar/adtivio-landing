"use client";

import { FormEvent, useState } from "react";

const initial = { name: "", email: "", company: "", message: "" };

export function ContactBlock() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    form.name.trim().length > 1 &&
    form.email.includes("@") &&
    form.company.trim().length > 1 &&
    form.message.trim().length > 10;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValid) {
      setSubmitted(true);
      setForm(initial);
    }
  };

  const fields = [
    { key: "name", label: "Full name" },
    { key: "email", label: "Work email" },
    { key: "company", label: "Company" },
  ] as const;

  return (
    <section id="contact" className="scroll-mt-28">
      <p className="mb-3 text-xs uppercase tracking-[0.22em] text-violet-200/80">
        Lead Generation
      </p>
      <h2 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl">
        Request Access to a Strategy Call
      </h2>
      <div className="mt-3 text-sm text-slate-300">
        <p>Email: hello@adtivio.com · Tel: +123456789</p>
        <p>Address: 250 Strategy Avenue, New York, NY 10001</p>
      </div>
      <form onSubmit={onSubmit} className="glass-card mt-8 space-y-5 rounded-3xl p-6 sm:p-8">
        {fields.map((field) => (
          <label key={field.key} className="relative block">
            <input
              type={field.key === "email" ? "email" : "text"}
              value={form[field.key]}
              onChange={(event) =>
                setForm((current) => ({ ...current, [field.key]: event.target.value }))
              }
              placeholder=" "
              className="peer w-full rounded-xl border border-slate-400/35 bg-slate-950/50 px-4 pb-2 pt-6 text-sm text-white outline-none transition focus:border-cyan-300/90 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              required
            />
            <span className="pointer-events-none absolute left-4 top-2 text-xs uppercase tracking-[0.14em] text-slate-300 transition peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              {field.label}
            </span>
          </label>
        ))}
        <label className="relative block">
          <textarea
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            placeholder=" "
            rows={4}
            className="peer w-full rounded-xl border border-slate-400/35 bg-slate-950/50 px-4 pb-2 pt-6 text-sm text-white outline-none transition focus:border-cyan-300/90 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            required
          />
          <span className="pointer-events-none absolute left-4 top-2 text-xs uppercase tracking-[0.14em] text-slate-300 transition peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Goals and spend profile
          </span>
        </label>
        <button
          type="submit"
          className="rounded-full border border-cyan-300/40 bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white shadow-[0_0_28px_rgba(34,211,238,0.4)] transition enabled:hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!isValid}
        >
          Book Discovery Call
        </button>
        {submitted ? (
          <p className="text-sm text-cyan-200">
            Request submitted. We will contact you within one business day.
          </p>
        ) : null}
      </form>
    </section>
  );
}
