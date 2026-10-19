export default function Card({ children, className = "", padded = true, hoverable = false }) {
  return (
    <div
      className={[
        "bg-card rounded-2xl border border-slate-100 shadow-card",
        hoverable ? "transition-shadow hover:shadow-card-hover" : "",
        padded ? "p-5" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
