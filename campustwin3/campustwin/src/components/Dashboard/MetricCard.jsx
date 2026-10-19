import { ArrowDown, ArrowUp } from "lucide-react";
import Card from "../UI/Card";

export default function MetricCard({ label, value, change, trend = "up", icon: Icon, tone = "primary" }) {
  const isUp = trend === "up";
  const trendColor = isUp ? "text-status-success" : "text-status-danger";

  const iconTones = {
    primary: "bg-primary/10 text-primary",
    success: "bg-status-success/10 text-status-success",
    warning: "bg-status-warning/10 text-status-warning",
    cyan: "bg-cyan/10 text-cyan",
  };

  return (
    <Card hoverable>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-ink-secondary">{label}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-ink">{value}</p>
        </div>
        {Icon && (
          <span className={["flex h-10 w-10 items-center justify-center rounded-xl", iconTones[tone]].join(" ")}>
            <Icon size={19} strokeWidth={2.25} />
          </span>
        )}
      </div>
      {change && (
        <div className={["mt-3 flex items-center gap-1 text-xs font-semibold", trendColor].join(" ")}>
          {isUp ? <ArrowUp size={13} /> : <ArrowDown size={13} />}
          {change}
          <span className="font-normal text-ink-secondary">vs last week</span>
        </div>
      )}
    </Card>
  );
}
