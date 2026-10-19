import { useNavigate } from "react-router-dom";
import { Mail, Shield, LogOut } from "lucide-react";
import Button from "../components/UI/Button";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <div className="mx-auto max-w-lg">
      <div className="rounded-2xl border border-slate-100 bg-card p-8 shadow-card">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/96?img=12"
            alt=""
            className="h-16 w-16 rounded-full border border-slate-100 object-cover"
          />
          <div>
            <h2 className="text-lg font-bold text-ink">{user?.name}</h2>
            <p className="text-sm text-ink-secondary">{user?.role}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
          <div className="flex items-center gap-3 text-sm">
            <Mail size={16} className="text-ink-secondary" />
            <span className="text-ink">{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Shield size={16} className="text-ink-secondary" />
            <span className="text-ink">
              Session encrypted &amp; stored locally on this device
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          size="md"
          className="mt-8 w-full"
          onClick={handleLogout}
        >
          <LogOut size={16} className="mr-1.5" />
          Log out
        </Button>
      </div>
    </div>
  );
}
