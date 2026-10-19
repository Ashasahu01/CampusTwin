import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { sha256Hex, encryptJSON, decryptJSON } from "../lib/crypto";
import {
  AUTH_SALT,
  AUTH_SECRET,
  SESSION_TTL_MINUTES,
  DEMO_ACCOUNTS,
} from "../lib/authConfig";

const SESSION_STORAGE_KEY = "campustwin.session";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On first load, try to restore + decrypt a saved session.
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem(SESSION_STORAGE_KEY);
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const session = await decryptJSON(token, AUTH_SECRET);
        if (session?.user && session?.exp > Date.now()) {
          setUser(session.user);
        } else {
          localStorage.removeItem(SESSION_STORAGE_KEY);
        }
      } catch {
        // Token was tampered with, corrupted, or the secret changed.
        localStorage.removeItem(SESSION_STORAGE_KEY);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function login(email, password) {
    if (!window.isSecureContext || !window.crypto?.subtle) {
      // Web Crypto (crypto.subtle) only runs in a secure context —
      // https:// or http://localhost. Anything else (a plain IP,
      // file://, some embedded preview frames) can't hash passwords.
      return {
        ok: false,
        error:
          "This browser context can't run the crypto needed to sign in " +
          "(requires https:// or http://localhost). Try opening the app " +
          "at http://localhost:5173 instead.",
      };
    }

    if (!AUTH_SALT || !AUTH_SECRET) {
      return {
        ok: false,
        error:
          "Auth isn't configured — VITE_AUTH_SALT / VITE_AUTH_SECRET are " +
          "missing. Check that a .env file exists at the project root and " +
          "restart the dev server.",
      };
    }

    try {
      const normalizedEmail = String(email || "").trim().toLowerCase();
      const account = DEMO_ACCOUNTS.find((a) => a.email === normalizedEmail);

      if (!account) {
        return { ok: false, error: "No account found with that email." };
      }

      const candidateHash = await sha256Hex(`${AUTH_SALT}:${password}`);
      if (candidateHash !== account.passwordHash) {
        return { ok: false, error: "Incorrect email or password." };
      }

      const sessionUser = {
        email: account.email,
        name: account.name,
        role: account.role,
      };
      const exp = Date.now() + SESSION_TTL_MINUTES * 60 * 1000;

      const token = await encryptJSON({ user: sessionUser, exp }, AUTH_SECRET);
      localStorage.setItem(SESSION_STORAGE_KEY, token);
      setUser(sessionUser);

      return { ok: true };
    } catch (err) {
      console.error("Login failed:", err);
      return { ok: false, error: "Something went wrong while signing in." };
    }
  }

  function logout() {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    setUser(null);
  }

  const value = useMemo(
    () => ({ user, isAuthenticated: !!user, loading, login, logout }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
