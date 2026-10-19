const VARIANTS = {
  primary:
    "bg-primary text-white hover:bg-primary-bright shadow-sm shadow-primary/20",
  outline:
    "bg-white text-ink border border-slate-200 hover:border-primary/40 hover:text-primary",
  ghost: "bg-transparent text-ink-secondary hover:bg-slate-100 hover:text-ink",
  danger: "bg-status-danger text-white hover:brightness-105",
};

const SIZES = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  as: As = "button",
  ...props
}) {
  return (
    <As
      className={[
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold",
        "transition-all duration-150 active:scale-[0.98]",
        "disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant],
        SIZES[size],
        className,
      ].join(" ")}
      {...props}
    >
      {Icon && <Icon size={16} strokeWidth={2.25} />}
      {children}
    </As>
  );
}
