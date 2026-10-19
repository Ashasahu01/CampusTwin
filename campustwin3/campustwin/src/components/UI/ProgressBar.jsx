const TONES = {
  primary: "bg-primary",
  success: "bg-status-success",
  warning: "bg-status-warning",
  danger: "bg-status-danger",
  cyan: "bg-cyan",
};

export default function ProgressBar({ value = 0, tone = "primary", className = "" }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      className={["h-1.5 w-full rounded-full bg-slate-100 overflow-hidden", className].join(" ")}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={["h-full rounded-full transition-all duration-500", TONES[tone]].join(" ")}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
