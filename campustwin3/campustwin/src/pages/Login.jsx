import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Landmark, Mail, Lock, ArrowLeft, AlertCircle } from "lucide-react";
import Button from "../components/UI/Button";
import { useAuth } from "../context/AuthContext";

const DEMO_ACCOUNTS = {
  admin: { email: "admin@campustwin.edu", password: "Campus@2026" },
  student: { email: "student@campustwin.edu", password: "Student@2026" },
};

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const redirectTo = location.state?.from?.pathname || "/dashboard";

  async function attemptLogin(loginEmail, loginPassword) {
    setError("");
    setSubmitting(true);
    try {
      const result = await login(loginEmail, loginPassword);
      if (result.ok) {
        navigate(redirectTo, { replace: true });
      } else {
        setError(result.error || "Unable to sign in.");
      }
    } catch (err) {
      console.error("Unexpected login error:", err);
      setError("Something went wrong while signing in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    attemptLogin(email, password);
  }

  function handleDemoLogin(key) {
    const account = DEMO_ACCOUNTS[key];
    setEmail(account.email);
    setPassword(account.password);
    attemptLogin(account.email, account.password);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary hover:text-ink"
        >
          <ArrowLeft size={15} /> Back to home
        </Link>

        <div className="rounded-2xl border border-slate-100 bg-card p-8 shadow-card">
          <div className="mb-6 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Landmark size={19} strokeWidth={2.25} />
            </span>
            <span className="text-lg font-bold tracking-tight text-ink">
              CampusTwin
            </span>
          </div>

          <h1 className="text-xl font-bold text-ink">Welcome back</h1>
          <p className="mt-1 text-sm text-ink-secondary">
            Sign in to access your campus dashboard
          </p>

          {error && (
            <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-secondary"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="block text-sm font-medium text-ink">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-secondary"
                />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={submitting}
            >
              {submitting ? "Signing in…" : "Login"}
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-xs font-medium text-ink-secondary">
              OR TRY A DEMO
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              size="md"
              disabled={submitting}
              onClick={() => handleDemoLogin("admin")}
            >
              Demo Admin
            </Button>
            <Button
              type="button"
              variant="outline"
              size="md"
              disabled={submitting}
              onClick={() => handleDemoLogin("student")}
            >
              Demo Student
            </Button>
          </div>

          <p className="mt-4 text-center text-xs text-ink-secondary">
            Demo credentials — Admin: admin@campustwin.edu / Campus@2026 ·
            Student: student@campustwin.edu / Student@2026
          </p>
        </div>
      </div>
    </div>
  );
}
