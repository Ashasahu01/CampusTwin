import { Link } from "react-router-dom";
import { Play, ArrowRight, Wifi, Droplet, Zap, Users } from "lucide-react";
import SiteHeader from "../components/Layout/SiteHeader";
import Button from "../components/UI/Button";

const PULSES = [
  { icon: Wifi, top: "18%", left: "28%" },
  { icon: Zap, top: "10%", left: "52%" },
  { icon: Droplet, top: "42%", left: "78%" },
  { icon: Users, top: "34%", left: "10%" },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-navy">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60" />
        </div>

        {/* floating status pulses */}
        {PULSES.map(({ icon: Icon, top, left }, i) => (
          <div
            key={i}
            className="absolute hidden h-11 w-11 animate-pulse items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan backdrop-blur-sm md:flex"
            style={{ top, left }}
          >
            <Icon size={18} />
          </div>
        ))}

        <div className="relative mx-auto flex max-w-7xl flex-col px-5 py-24 md:px-8 md:py-32">
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl">
            A Smarter Campus
            <br />
            for a{" "}
            <span className="bg-gradient-to-r from-primary-bright to-cyan bg-clip-text text-transparent">
              Better Tomorrow
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-white/70 md:text-lg">
            AI-Powered Digital Twin &amp; Simulation Platform for Modern
            Universities
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button as={Link} to="/campus" variant="primary" size="lg" icon={ArrowRight}>
              Explore Campus
            </Button>
            <Button
              as="button"
              variant="outline"
              size="lg"
              icon={Play}
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:border-white/30"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section id="features" className="border-t border-white/5 bg-navy py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Real-Time Digital Twin",
                desc: "Live 3D replica of every building, room, and system on campus.",
              },
              {
                title: "AI Campus Assistant",
                desc: "Ask natural-language questions and get instant operational answers.",
              },
              {
                title: "What-If Simulation",
                desc: "Model population, energy, and event scenarios before they happen.",
              },
              {
                title: "Smart Alerts",
                desc: "Automatic detection of occupancy, energy, and network anomalies.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary/30"
              >
                <h3 className="text-sm font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
