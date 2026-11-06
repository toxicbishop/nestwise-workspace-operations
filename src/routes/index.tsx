import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Building2,
  CalendarCheck2,
  Check,
  CheckCircle2,
  CreditCard,
  Globe2,
  LayoutDashboard,
  LineChart,
  Mail,
  ShieldCheck,
  Users2,
} from "lucide-react";
import heroImg from "@/assets/hero-workspace.jpg";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ember font-display text-sm font-bold text-white">
            W
          </span>
          <span className="font-display text-[15px] font-bold tracking-tight text-paper">
            WorkNest
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-paper/70 md:flex">
          {(
            [
              ["Features", "features"],
              ["Product", "product"],
              ["How it works", "how"],
              ["Pricing", "pricing"],
            ] as const
          ).map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="transition-colors hover:text-paper"
            >
              {label}
            </button>
          ))}
        </nav>
        <Link
          to="/app"
          className="inline-flex items-center gap-1.5 rounded-lg bg-ember px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ember-deep"
        >
          Open the App
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-charcoal-950 text-paper">
      <img
        src={heroImg}
        alt="A premium coworking space at dusk with warm ember lighting"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        width={1536}
        height={1024}
      />
      <div className="absolute inset-0 bg-linear-to-b from-charcoal-950/60 via-charcoal-950/75 to-charcoal-950" />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-24 sm:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1.5 text-xs font-semibold text-ember">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          Coworking operations, unified
        </div>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
          Run your coworking space like a flagship operation.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
          WorkNest brings leads, tours, members, bookings, and billing into one operational cockpit
          — so every inquiry becomes a signed membership, and every square metre earns its keep.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/app"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ember/25 transition-all hover:bg-ember-deep hover:shadow-ember/40"
          >
            Explore the live product
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => scrollTo("product")}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
          >
            See it in action
          </button>
        </div>
        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
          {(
            [
              ["+31%", "lead conversion"],
              ["88%", "avg. occupancy"],
              ["97.4%", "invoices collected"],
              ["12 min", "set-up per location"],
            ] as const
          ).map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-2xl font-bold text-ember sm:text-3xl">{value}</dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-paper/50">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: Users2,
    title: "Lead-to-member pipeline",
    body: "Track every inquiry from first touch to signed contract — qualification, follow-ups, tours, and one-click conversion with full audit history.",
  },
  {
    icon: CalendarCheck2,
    title: "Live schedule & conflict guard",
    body: "Bookings for desks, suites, and studios with real-time availability and automatic double-booking prevention across every location.",
  },
  {
    icon: Building2,
    title: "Space inventory",
    body: "Every hot desk, dedicated suite, and virtual office mapped to capacity, rate cards, and amenities — per campus, always current.",
  },
  {
    icon: CreditCard,
    title: "Billing that collects",
    body: "Invoicing, payment records, reminders, and outstanding-balance tracking built for recurring memberships, not one-off receipts.",
  },
  {
    icon: LayoutDashboard,
    title: "Operations dashboard",
    body: "Today's tours, capacity, MRR, and follow-ups on one screen — your morning stand-up, already prepared.",
  },
  {
    icon: LineChart,
    title: "Occupancy & revenue analytics",
    body: "Utilization by space, conversion velocity, retention, and collected revenue — the numbers owners actually ask about.",
  },
] as const;

function Features() {
  return (
    <section id="features" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">
          Everything in one place
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-charcoal-950 sm:text-4xl">
          The complete member lifecycle, minus the spreadsheets.
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-charcoal-950/8 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-charcoal-950/8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal-950 text-ember transition-colors group-hover:bg-ember group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-charcoal-950">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section id="product" className="bg-charcoal-950 py-24 text-paper">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">The product</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            One cockpit for the whole floor.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-paper/60 sm:text-base">
            Purpose-built for coworking operators — not a generic CRM with coworking words bolted
            on. Live below; nothing to install.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
          <img
            src="/worknest-dashboard.png"
            alt="WorkNest operations dashboard showing capacity, tours, and billing"
            className="w-full"
            loading="lazy"
            width={1280}
            height={800}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/app"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ember/25 transition-colors hover:bg-ember-deep"
          >
            Try the live workspace
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const PIPELINE = [
  ["Inquiry", "Website, walk-in, or referral lands in the pipeline."],
  ["Qualify", "Plan interest, team size, and location captured on day one."],
  ["Tour", "Walkthroughs scheduled with automatic reminders."],
  ["Convert", "One click turns the lead into a member on a plan."],
  ["Retain", "Renewals, bookings, and billing keep the desk occupied."],
] as const;

function HowItWorks() {
  return (
    <section id="how" className="bg-paper-dim py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-charcoal-950 sm:text-4xl">
            From first hello to long-term member.
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-5">
          {PIPELINE.map(([title, body], i) => (
            <li key={title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal-950 font-display text-xs font-bold text-ember">
                  {i + 1}
                </span>
                <span className="hidden h-px flex-1 bg-charcoal-950/10 md:block" />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold text-charcoal-950">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-charcoal-700">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const QUOTES = [
  {
    quote:
      "We went from three disconnected tools to one screen. Tour-to-sign-up time dropped by a third in the first quarter.",
    name: "Priya Nair",
    role: "Community Director, HIVE Workspaces",
  },
  {
    quote:
      "Occupancy used to be a spreadsheet debate. Now it's a number on the wall that everyone trusts.",
    name: "Devansh Rao",
    role: "Founder, Foundry Labs",
  },
  {
    quote:
      "Billing was our biggest leak. WorkNest's outstanding balances view paid for itself in the first month.",
    name: "Nikita Bose",
    role: "COO, Northlight Collective",
  },
] as const;

function Testimonials() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-charcoal-950 sm:text-4xl">
          Operators who stopped duct-taping tools together.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {QUOTES.map(({ quote, name, role }) => (
            <figure
              key={name}
              className="rounded-2xl border border-charcoal-950/8 bg-white p-7 shadow-sm"
            >
              <div className="flex gap-1 text-ember" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-sm">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-charcoal-900">
                “{quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-charcoal-950/6 pt-4">
                <div className="font-display text-sm font-semibold text-charcoal-950">{name}</div>
                <div className="text-xs text-charcoal-700">{role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const TIERS = [
  {
    name: "Starter",
    price: "₹3,499",
    blurb: "For a single location finding its rhythm.",
    features: ["1 location", "Up to 50 members", "Leads, tours & bookings", "Invoicing & payments"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Growth",
    price: "₹8,499",
    blurb: "For scaling campuses with a real pipeline.",
    features: [
      "Up to 5 locations",
      "Unlimited members",
      "Occupancy & revenue analytics",
      "Conflict-free scheduling",
      "Priority support",
    ],
    cta: "Start free",
    featured: true,
  },
  {
    name: "Portfolio",
    price: "Custom",
    blurb: "For multi-city operators and franchises.",
    features: [
      "Unlimited locations",
      "Multi-currency billing",
      "API access & SSO",
      "Dedicated success manager",
    ],
    cta: "Talk to us",
    featured: false,
  },
] as const;

function Pricing() {
  return (
    <section id="pricing" className="bg-paper-dim py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-charcoal-950 sm:text-4xl">
            Costs less than one empty desk.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={
                t.featured
                  ? "relative rounded-2xl bg-charcoal-950 p-8 text-paper shadow-2xl shadow-charcoal-950/30 ring-1 ring-ember/40"
                  : "rounded-2xl border border-charcoal-950/8 bg-white p-8 shadow-sm"
              }
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-ember px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              <h3
                className={
                  t.featured
                    ? "font-display text-lg font-semibold text-paper"
                    : "font-display text-lg font-semibold text-charcoal-950"
                }
              >
                {t.name}
              </h3>
              <p
                className={
                  t.featured ? "mt-1 text-xs text-paper/60" : "mt-1 text-xs text-charcoal-700"
                }
              >
                {t.blurb}
              </p>
              <div className="mt-5 flex items-baseline gap-1">
                <span
                  className={
                    t.featured
                      ? "font-display text-4xl font-bold text-paper"
                      : "font-display text-4xl font-bold text-charcoal-950"
                  }
                >
                  {t.price}
                </span>
                {t.price !== "Custom" && (
                  <span
                    className={t.featured ? "text-sm text-paper/50" : "text-sm text-charcoal-700"}
                  >
                    /mo per location
                  </span>
                )}
              </div>
              {t.price !== "Custom" && (
                <p
                  className={
                    t.featured
                      ? "mt-1 text-[11px] text-paper/40"
                      : "mt-1 text-[11px] text-charcoal-700"
                  }
                >
                  + GST (18%) added at checkout
                </p>
              )}
              <ul className="mt-6 space-y-2.5">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className={
                      t.featured
                        ? "flex items-start gap-2 text-sm text-paper/80"
                        : "flex items-start gap-2 text-sm text-charcoal-900"
                    }
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/app"
                className={
                  t.featured
                    ? "mt-8 flex items-center justify-center gap-1.5 rounded-lg bg-ember px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ember-deep"
                    : "mt-8 flex items-center justify-center gap-1.5 rounded-lg border border-charcoal-950/15 px-4 py-2.5 text-sm font-semibold text-charcoal-950 transition-colors hover:border-ember hover:text-ember"
                }
              >
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const ctaRef = useRef<HTMLDivElement>(null);
  return (
    <section className="bg-charcoal-950 py-24 text-paper">
      <div ref={ctaRef} className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Your next member is already in the pipeline.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-paper/60 sm:text-base">
          Open the live workspace and see how WorkNest runs a full day of tours, bookings, and
          billing — with zero setup.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/app"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-8 py-4 text-base font-semibold text-white shadow-lg shadow-ember/30 transition-all hover:bg-ember-deep"
          >
            Open WorkNest
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-charcoal-950 text-paper">
      {/* Subtle brand glow accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ember/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        {/* Top Newsletter & Brand Section */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("top");
              }}
              className="inline-flex items-center gap-2.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember font-display text-base font-bold text-white shadow-lg shadow-ember/25">
                W
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-paper">
                WorkNest
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
              The unified operations cockpit for coworking spaces, shared studios, and flexible real
              estate. Turn inquiries into active members and maximize campus yield.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                All Systems Operational
              </div>
              <span className="text-xs text-paper/40">99.98% Uptime SLA</span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <div className="rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ember">
                <Mail className="h-3.5 w-3.5" />
                Coworking Ops Dispatch
              </div>
              <h3 className="mt-2 font-display text-lg font-bold text-paper sm:text-xl">
                Fortnightly benchmarks, tactics, and operational playbooks
              </h3>
              <p className="mt-1 text-xs text-paper/60 sm:text-sm">
                Join 4,200+ flexible workspace operators mastering tour conversion and desk yield.
              </p>

              {subscribed ? (
                <div className="mt-5 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs font-medium text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>You are subscribed! Keep an eye on your inbox for the upcoming issue.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="h-11 flex-1 rounded-lg border border-white/15 bg-charcoal-900/90 px-4 text-sm text-paper placeholder:text-paper/40 focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-ember px-5 text-sm font-semibold text-white shadow-md shadow-ember/20 transition-colors hover:bg-ember-deep"
                  >
                    Subscribe Free
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Multi-column Navigation Grid */}
        <div className="grid grid-cols-2 gap-8 py-16 sm:grid-cols-2 md:grid-cols-4 lg:gap-10">
          {/* Column 1: Product & Cockpit */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-paper">
              Product & Cockpit
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-paper/70">
              <li>
                <Link to="/app" className="transition-colors hover:text-ember">
                  Operations Overview
                </Link>
              </li>
              <li>
                <Link to="/app/leads" className="transition-colors hover:text-ember">
                  Lead & Tour Pipeline
                </Link>
              </li>
              <li>
                <Link to="/app/spaces" className="transition-colors hover:text-ember">
                  Space & Desk Inventory
                </Link>
              </li>
              <li>
                <Link to="/app/bookings" className="transition-colors hover:text-ember">
                  Meeting Room Bookings
                </Link>
              </li>
              <li>
                <Link to="/app/billing" className="transition-colors hover:text-ember">
                  Invoicing & Collections
                </Link>
              </li>
              <li>
                <Link to="/app/members" className="transition-colors hover:text-ember">
                  Member Directory
                </Link>
              </li>
              <li>
                <Link to="/app/analytics" className="transition-colors hover:text-ember">
                  Occupancy & Yield Analytics
                </Link>
              </li>
              <li>
                <Link to="/app/settings" className="transition-colors hover:text-ember">
                  Workspace Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-paper">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-paper/70">
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("features");
                  }}
                  className="transition-colors hover:text-ember"
                >
                  Single Flagship Hubs
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("product");
                  }}
                  className="transition-colors hover:text-ember"
                >
                  Multi-Campus Networks
                </a>
              </li>
              <li>
                <a
                  href="#how"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("how");
                  }}
                  className="transition-colors hover:text-ember"
                >
                  Incubators & Accelerators
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("pricing");
                  }}
                  className="transition-colors hover:text-ember"
                >
                  Creative & Maker Studios
                </a>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-paper/50">
                  Enterprise Satellite
                  <span className="rounded bg-white/10 px-1 py-0.5 text-[9px] font-semibold text-paper/80">
                    New
                  </span>
                </span>
              </li>
              <li>
                <span className="text-paper/50">Legacy Migration Guide</span>
              </li>
              <li>
                <span className="text-paper/50">Turnkey Onboarding</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Trust */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-paper">
              Platform & Trust
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-paper/70">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-ember" />
                <span>SOC 2 Type II Audited</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span>GDPR & CCPA Compliant</span>
              </li>
              <li>
                <span className="text-paper/50">Kisi & Salto Door Access</span>
              </li>
              <li>
                <span className="text-paper/50">Stripe Invoicing & ACH</span>
              </li>
              <li>
                <span className="text-paper/50">Google & Outlook Calendar</span>
              </li>
              <li>
                <span className="text-paper/50">REST Webhooks & API</span>
              </li>
              <li>
                <span className="text-paper/50">Conflict Guard Engine</span>
              </li>
              <li>
                <span className="text-paper/50">Zero-Config Offline Mode</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-paper">
              Company & Legal
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-paper/70">
              <li>
                <Link to="/app" className="transition-colors hover:text-ember">
                  Interactive Product Demo
                </Link>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("pricing");
                  }}
                  className="transition-colors hover:text-ember"
                >
                  Pricing & Tier Plans
                </a>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-paper/50">
                  Careers
                  <span className="rounded bg-ember/20 px-1 py-0.5 text-[9px] font-semibold text-ember">
                    We are hiring
                  </span>
                </span>
              </li>
              <li>
                <span className="text-paper/50">Security Whitepaper</span>
              </li>
              <li>
                <span className="text-paper/50">Privacy Policy</span>
              </li>
              <li>
                <span className="text-paper/50">Terms of Service</span>
              </li>
              <li>
                <span className="text-paper/50">Cookie Preferences</span>
              </li>
              <li>
                <a
                  href="mailto:operators@worknest.co"
                  className="inline-flex items-center gap-1 transition-colors hover:text-ember"
                >
                  Contact Operator Support
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Footprint Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-6 text-xs text-paper/60">
          <div className="flex flex-wrap items-center gap-2">
            <Globe2 className="h-4 w-4 shrink-0 text-ember" />
            <span className="font-medium text-paper">Powering operators globally:</span>
            <span>London</span>
            <span className="text-white/20">•</span>
            <span>New York</span>
            <span className="text-white/20">•</span>
            <span>Berlin</span>
            <span className="text-white/20">•</span>
            <span>Bengaluru</span>
            <span className="text-white/20">•</span>
            <span>Singapore</span>
            <span className="text-white/20">•</span>
            <span>Sydney</span>
          </div>
          <button
            onClick={() => scrollTo("top")}
            className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-paper/80 transition-colors hover:bg-white/10 hover:text-paper"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-paper/50 sm:flex-row">
          <div>© 2026 WorkNest Technologies Inc. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/toxicbishop/WorkNest"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WorkNest on GitHub"
              className="transition-colors hover:text-paper"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WorkNest on X"
              className="transition-colors hover:text-paper"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WorkNest on LinkedIn"
              className="transition-colors hover:text-paper"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64 0 .91.73 1.64 1.64 1.64s1.64-.73 1.64-1.64c0-.91-.73-1.64-1.64-1.64z" />
              </svg>
            </a>
            <span className="text-white/20">•</span>
            <span>Crafted for high-performing coworking spaces</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MarketingHome() {
  return (
    <div className="min-h-screen bg-paper font-sans">
      <NavBar />
      <Hero />
      <Features />
      <Product />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FinalCta />
      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: MarketingHome,
  head: () => ({
    meta: [
      { title: "WorkNest — Coworking Space Management Software" },
      {
        name: "description",
        content:
          "WorkNest unifies leads, tours, members, bookings, and billing into one operational cockpit for coworking spaces.",
      },
      { property: "og:title", content: "WorkNest — Coworking Space Management Software" },
      {
        property: "og:description",
        content:
          "The operational cockpit for coworking spaces: leads, tours, members, bookings, and billing in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
