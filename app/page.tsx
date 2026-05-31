"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Cpu,
  Menu,
  MonitorPlay,
  Sparkles,
  Target,
  X,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

type TabKey = "dsp" | "ssp" | "ctv";
type FormFields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Meta Ads Growth Engine",
    description:
      "Build conversion-led acquisition loops with signal-rich audience architecture and creative velocity testing.",
    icon: Target,
  },
  {
    title: "Google Ads Revenue Model",
    description:
      "Scale high-intent search and performance max with margin-safe bidding frameworks and predictive spend pacing.",
    icon: BarChart3,
  },
  {
    title: "Unit Economics Intelligence",
    description:
      "Align CAC, contribution margin, and LTV curves so every campaign compounds profitable growth.",
    icon: Sparkles,
  },
];

const ecosystemContent: Record<
  TabKey,
  { title: string; subtitle: string; points: string[] }
> = {
  dsp: {
    title: "Demand-Side Platform (DSP)",
    subtitle:
      "Automated advertiser targeting with algorithmic bidding engines that optimize every impression in real time.",
    points: [
      "Audience graphing for precision targeting",
      "Dynamic bid shading for efficient CPM control",
      "Real-time pacing logic aligned to ROAS targets",
    ],
  },
  ssp: {
    title: "Supply-Side Platform (SSP)",
    subtitle:
      "Publisher-first inventory controls and yield optimization pipelines designed for private, premium auctions.",
    points: [
      "Inventory segmentation with transparent floor rules",
      "Auction orchestration for higher fill and eCPM",
      "Live monetization analytics with private marketplace support",
    ],
  },
  ctv: {
    title: "Connected TV & In-App Media",
    subtitle:
      "Premium household-targeted streaming and mobile in-app inventory across Apple TV, Fire TV, and app ecosystems.",
    points: [
      "Cross-screen identity mapping for cohesive frequency",
      "Brand-safe CTV placements with deterministic targeting",
      "Incrementality-aware creative sequencing for full-funnel lift",
    ],
  },
};

const formAction = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("dsp");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [formEndpointError, setFormEndpointError] = useState("");

  const activePanel = useMemo(() => ecosystemContent[activeTab], [activeTab]);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormFields, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.company.trim()) nextErrors.company = "Company is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onFieldChange = (key: keyof FormFields, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
      <BackgroundParticles />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="group flex items-center gap-2 text-sm font-semibold tracking-[0.35em] text-cyan-100">
            <Cpu className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:rotate-12" />
            ADTIVIO
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-xs uppercase tracking-[0.22em] text-slate-300 transition-colors hover:text-cyan-200"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            type="button"
            className="rounded-lg border border-white/15 p-2 text-slate-100 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="border-t border-white/10 px-6 py-3 md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm tracking-[0.2em] text-slate-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-20 pt-20 md:pt-28">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.45em] text-cyan-300/90"
          >
            Data-Driven Growth Architecture
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          >
            Engineering High-ROAS Media Buying & Programmatic Ecosystems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="max-w-2xl text-base text-slate-300 md:text-lg"
          >
            We architect acquisition systems where bidding algorithms, creative intelligence, and unit economics move in sync to unlock maximum scalability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-3 text-sm font-semibold tracking-[0.16em] text-slate-950 shadow-[0_0_36px_rgba(34,211,238,0.45)] transition-transform duration-300 hover:scale-[1.02]"
            >
              Get Started
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold tracking-[0.16em] text-slate-100 transition-colors duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
              Explore Ecosystem
            </a>
          </motion.div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 pb-24">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-10 text-2xl font-semibold tracking-[0.06em] text-white md:text-3xl"
          >
            Core Ad Management
          </motion.h2>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  className="rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <Icon className="mb-4 h-6 w-6 text-cyan-300" />
                  <h3 className="mb-3 text-lg font-medium text-white">{service.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="ecosystem" className="mx-auto max-w-6xl px-6 pb-24">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-3 text-2xl font-semibold text-white md:text-3xl"
          >
            The Future of Adtivio
          </motion.h2>
          <p className="mb-8 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            A connected programmatic stack designed to merge advertiser demand, publisher supply, and premium streaming environments into one adaptive growth operating system.
          </p>

          <div className="rounded-2xl border border-white/12 bg-white/5 p-3 backdrop-blur-xl">
            <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {([
                ["dsp", "DSP"],
                ["ssp", "SSP"],
                ["ctv", "Connected TV & In-App"],
              ] as Array<[TabKey, string]>).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium tracking-[0.08em] transition-colors ${
                    activeTab === key
                      ? "bg-gradient-to-r from-violet-500/70 to-cyan-400/65 text-white"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.26 }}
                className="rounded-xl border border-white/12 bg-slate-950/45 p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <MonitorPlay className="h-5 w-5 text-cyan-300" />
                  <h3 className="text-lg font-semibold text-white">{activePanel.title}</h3>
                </div>
                <p className="mb-5 text-sm leading-7 text-slate-300 md:text-base">{activePanel.subtitle}</p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {activePanel.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-8 rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl lg:grid-cols-2 lg:p-8">
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white md:text-3xl">Lead Generation Command Center</h2>
              <p className="mb-6 text-sm leading-7 text-slate-300 md:text-base">
                Book a discovery strategy call to align media efficiency, algorithmic bidding control, and scale-ready growth targets.
              </p>
              <div className="space-y-3 text-sm text-slate-200">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-300" /> hello@adtivio.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-300" /> +1-555-0123</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> San Francisco, CA</p>
              </div>
            </div>

            <form
              action={formAction || undefined}
              method="POST"
              onSubmit={(event) => {
                if (!formAction) {
                  event.preventDefault();
                  setFormEndpointError("Form submission is currently unavailable. Please contact us directly.");
                  return;
                }
                if (!validate()) {
                  event.preventDefault();
                  return;
                }
                setFormEndpointError("");
                setSubmitting(true);
              }}
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="New Adtivio inquiry" />

              {([
                ["name", "Name"],
                ["email", "Email"],
                ["company", "Company"],
                ["phone", "Phone"],
              ] as Array<[keyof FormFields, string]>).map(([field, label]) => (
                <div key={field}>
                  <div className="group relative">
                    <input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={(event) => onFieldChange(field, event.target.value)}
                      required
                      placeholder={label}
                      className="peer w-full rounded-xl border border-white/15 bg-slate-950/55 px-4 pb-2 pt-6 text-sm text-white outline-none transition-all duration-300 placeholder-transparent focus:border-cyan-300/80 focus:shadow-[0_0_0_2px_rgba(34,211,238,0.25)]"
                    />
                    <label
                      htmlFor={field}
                      className="pointer-events-none absolute left-4 top-2 text-[11px] uppercase tracking-[0.16em] text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-cyan-200"
                    >
                      {label}
                    </label>
                  </div>
                  {errors[field] && <p className="mt-1 text-xs text-rose-300">{errors[field]}</p>}
                </div>
              ))}

              <div>
                <div className="group relative">
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={(event) => onFieldChange("message", event.target.value)}
                    required
                    rows={4}
                    placeholder="Message"
                    className="peer w-full resize-none rounded-xl border border-white/15 bg-slate-950/55 px-4 pb-2 pt-6 text-sm text-white outline-none transition-all duration-300 placeholder-transparent focus:border-cyan-300/80 focus:shadow-[0_0_0_2px_rgba(34,211,238,0.25)]"
                  />
                  <label
                    htmlFor="message"
                    className="pointer-events-none absolute left-4 top-2 text-[11px] uppercase tracking-[0.16em] text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-cyan-200"
                  >
                    Message
                  </label>
                </div>
                {errors.message && <p className="mt-1 text-xs text-rose-300">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold tracking-[0.14em] text-slate-950 transition-transform duration-300 hover:scale-[1.01] disabled:opacity-70"
                disabled={submitting || !formAction}
              >
                {submitting ? "Submitting..." : "Request Strategy Call"}
              </button>
              {!formAction && (
                <p className="text-xs text-slate-400">Set <code>NEXT_PUBLIC_FORM_ENDPOINT</code> to your Formspree or Google Form action URL.</p>
              )}
              {formEndpointError && <p className="text-xs text-rose-300">{formEndpointError}</p>}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

function BackgroundParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.22),transparent_36%),radial-gradient(circle_at_85%_10%,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_50%_85%,rgba(99,102,241,0.18),transparent_42%)]" />
      <svg
        viewBox="0 0 1200 800"
        className="particle-network absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-45"
        fill="none"
        aria-hidden="true"
      >
        <path d="M40 130 L270 240 L520 140 L760 260 L1090 120" stroke="url(#lineGradient)" strokeWidth="1" />
        <path d="M120 590 L330 460 L600 570 L900 420 L1110 540" stroke="url(#lineGradient)" strokeWidth="1" />
        <path d="M230 320 L430 430 L660 340 L860 470" stroke="url(#lineGradient)" strokeWidth="1" />
        {[
          { x: 270, y: 240 },
          { x: 520, y: 140 },
          { x: 760, y: 260 },
          { x: 600, y: 570 },
          { x: 900, y: 420 },
          { x: 430, y: 430 },
          { x: 660, y: 340 },
        ].map((point) => (
          <circle key={`${point.x}-${point.y}`} cx={point.x} cy={point.y} r="4" fill="url(#dotGradient)" />
        ))}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(139,92,246,0.95)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0.95)" />
          </linearGradient>
          <radialGradient id="dotGradient">
            <stop offset="0%" stopColor="rgba(125,211,252,1)" />
            <stop offset="100%" stopColor="rgba(167,139,250,0.35)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
