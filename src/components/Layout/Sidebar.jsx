import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  Building2,
  DoorOpen,
  LineChart,
  FlaskConical,
  Bot,
  Bell,
  FileText,
  Landmark,
  LogOut,
  X,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/campus", label: "Campus Map", icon: Map },
  { to: "/buildings", label: "Buildings", icon: Building2 },
  { to: "/rooms", label: "Rooms", icon: DoorOpen },
  { to: "/analytics", label: "Analytics", icon: LineChart },
  { to: "/simulation", label: "Simulation", icon: FlaskConical },
  { to: "/ai-assistant", label: "AI Assistant", icon: Bot },
  { to: "/alerts", label: "Alerts", icon: Bell },
  { to: "/reports", label: "Reports", icon: FileText },
];

export default function Sidebar({ mobileOpen = false, onClose = () => {} }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy/50 backdrop-blur-sm md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-navy text-white",
          "transition-transform duration-200 md:sticky md:top-0 md:h-screen md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5">
          <NavLink to="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary-bright">
              <Landmark size={18} strokeWidth={2.25} />
            </span>
            <span className="text-[17px] font-bold tracking-tight text-white">
              CampusTwin
            </span>
          </NavLink>
          <button
            className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 md:hidden"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors",
                  isActive
                    ? "bg-primary text-white shadow-sm shadow-primary/30"
                    : "text-white/65 hover:bg-white/[0.07] hover:text-white",
                ].join(" ")
              }
            >
              <Icon size={18} strokeWidth={2} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* User profile */}
        <div className="border-t border-white/10 px-4 py-4">
          <NavLink
            to="/profile"
            className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-white/[0.07]"
          >
            <img
              src="https://i.pravatar.cc/64?img=12"
              alt=""
              className="h-9 w-9 rounded-full border border-white/10 object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {user?.name || "Guest"}
              </p>
              <p className="truncate text-xs text-white/50">
                {user?.role || ""}
              </p>
            </div>
          </NavLink>
          <button
            onClick={handleLogout}
            className="mt-1 flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left text-[13px] font-medium text-white/60 hover:bg-white/[0.07] hover:text-white"
          >
            <LogOut size={16} strokeWidth={2} />
            Log out
          </button>
        </div>
      </aside>
    </>
  );
}
