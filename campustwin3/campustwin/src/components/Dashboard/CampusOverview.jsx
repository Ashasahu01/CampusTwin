import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Card from "../UI/Card";

const LEGEND = [
  { label: "Low Occupancy", tone: "bg-status-success" },
  { label: "Medium Occupancy", tone: "bg-status-warning" },
  { label: "High Occupancy", tone: "bg-orange-500" },
  { label: "Overcrowded", tone: "bg-status-danger" },
];

export default function CampusOverview() {
  return (
    <Card padded={false} className="overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-5">
        <h3 className="text-base font-semibold text-ink">Campus Overview</h3>
        <Link
          to="/campus"
          className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
        >
          Open 3D View <ArrowUpRight size={13} />
        </Link>
      </div>

      <div className="relative mx-5 mt-4 h-56 overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-50">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=70"
          alt="Campus aerial view"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 px-5 py-4 text-xs text-ink-secondary">
        {LEGEND.map((l) => (
          <span key={l.label} className="flex items-center gap-1.5">
            <span className={["h-2 w-2 rounded-full", l.tone].join(" ")} />
            {l.label}
          </span>
        ))}
      </div>
    </Card>
  );
}
