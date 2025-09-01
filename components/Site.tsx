import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Mail, MapPin, Calendar, DollarSign } from "lucide-react";

export default function Site() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="block px-4 py-3 text-sm uppercase tracking-[0.14em] hover:opacity-60"
    >
      {children}
    </a>
  );

  const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <section id={id} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-16 lg:py-24">
      {children}
    </section>
  );

  return (
    <div className="brand-font text-neutral-900 bg-white selection:bg-black selection:text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo lockup */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/assets/livings_logo.png"
              alt="Livings Architecture + Interiors"
              className="h-8 sm:h-10 lg:h-12 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (sibling) sibling.style.display = 'inline-block';
              }}
            />
            <span className="text-sm sm:text-base tracking-[0.20em] uppercase hidden">Livings Architecture + Interiors</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-[12px] tracking-[0.16em] uppercase">
            <a href="#who" className="hover:opacity-60">Who We Are</a>
            <a href="#jordan" className="hover:opacity-60">Jordan Livings</a>
            <a href="#services" className="hover:opacity-60">Services</a>
            <a href="#contact" className="hover:opacity-60">Contact</a>
          </nav>

          {/* Mobile menu */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-black/10">
            <NavLink href="#who">Who We Are</NavLink>
            <NavLink href="#jordan">Jordan Livings</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        )}
      </header>

      {/* HOME */}
      <Section id="home">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
            >
              Architecture and interiors for people who value clarity, craft, and calm.
            </motion.h1>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-neutral-700">
              We design understated, lasting spaces—tailored to how you live and work. Black and white by default; warm by intent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center gap-2 border border-black px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] hover:bg-black hover:text-white transition">
                Explore Services <ArrowRight size={16}/>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] hover:border-black transition">
                Start a Conversation
              </a>
            </div>
          </div>

          {/* Stock imagery collage */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <img className="aspect-[4/5] w-full object-cover rounded-2xl border border-black/10" src="https://images.unsplash.com/photo-1529429612779-c8e40ef2f36a?q=80&w=1200&auto=format&fit=crop" alt="Modern interior detail" />
              <img className="aspect-[4/5] w-full object-cover rounded-2xl border border-black/10" src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop" alt="Minimal kitchen" />
              <img className="aspect-[4/5] w-full object-cover rounded-2xl border border-black/10" src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop" alt="Calm bathroom" />
              <img className="aspect-[4/5] w-full object-cover rounded-2xl border border-black/10" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop" alt="Architectural stair" />
            </div>
            <p className="mt-3 text-[11px] text-neutral-500">
              Stock imagery for aesthetic reference while in-progress work remains private.
            </p>
          </div>
        </div>
      </Section>

      {/* WHO WE ARE */}
      <Section id="who">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl tracking-tight">Who we are</h2>
            <p className="mt-6 text-[15px] leading-7 text-neutral-800">
              We are a Toronto-based practice focused on functional, sustainable architecture and interiors. Our work balances everyday utility with quiet, refined detail—spaces that feel effortless, yet are thoughtfully built. We collaborate closely with homeowners, landlords, and builders to align design ambition with budget, approvals, and timelines. The result: environments that serve well now and endure gracefully.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="p-6 border border-black/10 rounded-2xl bg-neutral-50">
              <h3 className="text-sm uppercase tracking-[0.18em]">Approach</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-800">
                <li>• Function first: plans that work hard for everyday life.</li>
                <li>• Sustainable choices: durable materials and sensible systems.</li>
                <li>• Builder-friendly: clear drawings, clean details, responsive coordination.</li>
                <li>• Calm aesthetics: a restrained palette, honest textures, natural light.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* JORDAN LIVINGS */}
      <Section id="jordan">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl tracking-tight">Jordan Livings</h2>
            <p className="mt-6 text-[15px] leading-7 text-neutral-800">
              Jordan is an Architect and Senior Project Manager with a decade of experience. For six years at Izen Architecture Inc., she led end-to-end custom residential projects across some of Toronto’s most sought-after neighbourhoods—guiding clients from first ideas through permits and construction with clarity, care, and exacting standards.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a href="#contact" className="inline-flex items-center gap-2 border border-black px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] hover:bg-black hover:text-white transition">
                Start a Conversation <ArrowRight size={16}/>
              </a>
              <a href="/assets/Jordan-Livings-CV.pdf" download className="text-xs text-neutral-600 underline hover:text-black transition self-start">
                Request CV (PDF)
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="p-6 border border-black/10 rounded-2xl bg-neutral-50">
              <h3 className="text-sm uppercase tracking-[0.18em]">Current Work</h3>
              <p className="mt-3 text-sm text-neutral-800">
                Active custom residential commissions are shared privately upon request. Selected process imagery is available to qualified clients and reputable builders.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services">
        <h2 className="text-2xl sm:text-3xl tracking-tight">Services</h2>
        <p className="mt-4 text-sm text-neutral-700 max-w-3xl">
          Two paths: hire us as your architect/designer, or engage us as a partner to support your own process. We calibrate scope and fee to your goals.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <Card title="Tier 1 — DIY Consult"
                subtitle="For homeowners planning small/medium renovations or refreshes"
                points={[
                  "One-time or short series of advisory sessions",
                  "Sourcing guidance (fixtures, finishes, suppliers)",
                  "Rules of thumb for dimensions & clearances",
                  "Design feedback on your layout or moodboard",
                ]}
          />

          <Card title="Tier 2 — Layout Review & Ongoing Consulting"
                subtitle="For builders, landlords, and DIY clients"
                points={[
                  "Iterative plan reviews with markups",
                  "Permit set support (as-needed drawings)",
                  "Coordination with trades and suppliers",
                  "On-call questions during key decisions",
                ]}
          />

          <Card title="Tier 3 — Schematic Floor Plans"
                subtitle="Foundational planning to unlock your project"
                points={[
                  "Measured plans (or based on your base files)",
                  "Two to three plan options with pros/cons",
                  "Refined schematic set ready for pricing",
                  "Roadmap to permits and next phases",
                ]}
          />

          <Card title="Tier 4 — Custom Architecture & Interiors"
                subtitle="White-glove, end-to-end service"
                points={[
                  "Concept to permits, tender, and construction support",
                  "Detailed drawings & interior schedules",
                  "Material sourcing and vendor coordination",
                  "Committee of Adjustment guidance where applicable",
                ]}
          />
        </div>

        <div className="mt-10 p-6 border border-black/10 rounded-2xl bg-neutral-50">
          <p className="text-[11px] uppercase tracking-[0.18em]">For Builders</p>
          <p className="mt-2 text-sm text-neutral-800">
            Need a responsive architect for permit sets and clean details? We deliver clear drawings, quick turnarounds, and attentive coordination tailored to reputable builders.
          </p>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <h2 className="text-2xl sm:text-3xl tracking-tight">Contact</h2>
        <p className="mt-4 text-sm text-neutral-700">Tell us a little about your project and we’ll follow up to schedule a call.</p>

        <form className="mt-8 grid gap-5 max-w-3xl">
          <Field label="Full Name" id="name" type="text" icon={<></>} required />
          <Field label="Email Address" id="email" type="email" required />
          <Field label="Phone Number" id="phone" type="tel" required />
          <Field label="Project Location" id="location" type="text" required />

          <div>
            <label className="block text-xs uppercase tracking-[0.18em] mb-2">Service Type</label>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                "Architecture & Interior Design",
                "DIY Consult",
                "Layout Review / Consulting",
                "Schematic Floor Plans",
                "Builder — Permit Set Support",
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 border border-black/10 rounded-lg px-3 py-2">
                  <input type="checkbox" className="accent-black"/> <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block text-xs uppercase tracking-[0.18em] mb-2">Target Completion Date</label>
            <div className="flex items-center gap-2 border border-black/10 rounded-lg px-3 py-2">
              <Calendar size={16}/> <input id="date" type="date" className="w-full outline-none"/>
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="block text-xs uppercase tracking-[0.18em] mb-2">Target Budget (materials + fees)</label>
            <div className="flex items-center gap-2 border border-black/10 rounded-lg px-3 py-2">
              <DollarSign size={16}/> <input id="budget" type="text" placeholder="$150,000" className="w-full outline-none"/>
            </div>
          </div>

          <div>
            <label htmlFor="about" className="block text-xs uppercase tracking-[0.18em] mb-2">Tell us about your project</label>
            <textarea id="about" rows={6} className="w-full border border-black/10 rounded-lg p-3 outline-none" placeholder="Scope, timeline, constraints…"/>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button type="button" className="inline-flex items-center gap-2 border border-black px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] hover:bg-black hover:text-white transition">
              Submit Inquiry <ArrowRight size={16}/>
            </button>
            <div className="text-xs text-neutral-500 flex items-center gap-4">
              <span className="inline-flex items-center gap-1"><Phone size={14}/> +1 (___) ___‑____</span>
              <span className="inline-flex items-center gap-1"><Mail size={14}/> hello@livingsarchitecture.com</span>
              <span className="inline-flex items-center gap-1"><MapPin size={14}/> Toronto, ON</span>
            </div>
          </div>
        </form>
      </Section>

      {/* Footer */}
      <footer className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-8 text-[11px] text-neutral-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Livings Architecture + Interiors. All rights reserved.</p>
          <p>Precedent images are for mood only while active work remains private.</p>
        </div>
      </footer>
    </div>
  );
}

function Card({ title, subtitle, points }: { title: string; subtitle: string; points: string[] }) {
  return (
    <div className="border border-black/10 rounded-2xl p-6 bg-white hover:shadow-sm transition">
      <h3 className="text-base leading-tight">{title}</h3>
      <p className="mt-1 text-sm text-neutral-700">{subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm text-neutral-800">
        {points.map((p, i) => (<li key={i}>• {p}</li>))}
      </ul>
    </div>
  );
}

function Field(
  { label, id, type = "text", required = false, icon }: {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    icon?: React.ReactNode;
  }
) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-[0.18em] mb-2">
        {label}{required ? " *" : ""}
      </label>
      <div className="flex items-center gap-2 border border-black/10 rounded-lg px-3 py-2">
        {icon}
        <input id={id} type={type} required={required} className="w-full outline-none"/>
      </div>
    </div>
  );
}

// compile-time prop checks
const _testFieldProps: React.ComponentProps<typeof Field> = {
  label: "Name",
  id: "test-id",
  type: "email",
  required: true,
  icon: null,
};
const _testCardProps: React.ComponentProps<typeof Card> = {
  title: "Test Title",
  subtitle: "Test Subtitle",
  points: ["One", "Two", "Three"],
};
