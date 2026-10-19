import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Landmark, Menu, X } from "lucide-react";
import Button from "../UI/Button";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/#features", label: "Features" },
  { to: "/campus", label: "3D Campus" },
  { to: "/analytics", label: "Analytics" },
  { to: "/ai-assistant", label: "AI Assistant" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary-bright">
            <Landmark size={18} strokeWidth={2.25} />
          </span>
          <span className="text-[17px] font-bold tracking-tight text-white">
            CampusTwin
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as={Link} to="/login" variant="primary" size="md">
            Login
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-white/80 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-1.5 text-sm font-medium text-white/75 hover:text-white"
              >
                {l.label}
              </NavLink>
            ))}
            <Button as={Link} to="/login" variant="primary" size="md" className="mt-2 w-full">
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
