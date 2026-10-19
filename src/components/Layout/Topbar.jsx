import { Menu, CloudSun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Topbar({ title, subtitle, onMenuClick }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  const dateStr = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="flex flex-wrap items-start justify-between gap-4 px-4 pt-6 md:px-8">
      <div className="flex items-start gap-3">
        <button
          className="mt-1 rounded-lg p-1.5 text-ink-secondary hover:bg-slate-100 md:hidden"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ink">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-sm text-ink-secondary">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 text-right">
        <div>
          <p className="text-sm font-semibold text-ink">{dateStr}</p>
          <p className="text-xs text-ink-secondary">{timeStr}</p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-card px-3 py-2 shadow-card">
          <CloudSun size={20} className="text-primary" />
          <div className="text-left leading-tight">
            <p className="text-sm font-semibold text-ink">24°C</p>
            <p className="text-[11px] text-ink-secondary">Partly Cloudy</p>
          </div>
        </div>
      </div>
    </header>
  );
}
