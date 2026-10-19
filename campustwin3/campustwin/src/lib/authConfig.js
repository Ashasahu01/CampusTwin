// Reads the demo-account configuration out of environment variables
// (see .env / .env.example). Nothing in here is a plaintext password —
// only salted hashes are ever stored or compared.

const env = import.meta.env;

export const AUTH_SALT = env.VITE_AUTH_SALT || "";
export const AUTH_SECRET = env.VITE_AUTH_SECRET || "";
export const SESSION_TTL_MINUTES = Number(env.VITE_SESSION_TTL_MINUTES) || 480;

export const DEMO_ACCOUNTS = [
  {
    email: (env.VITE_ADMIN_EMAIL || "").toLowerCase(),
    passwordHash: env.VITE_ADMIN_PASSWORD_HASH || "",
    name: env.VITE_ADMIN_NAME || "Admin",
    role: env.VITE_ADMIN_ROLE || "Administrator",
  },
  {
    email: (env.VITE_STUDENT_EMAIL || "").toLowerCase(),
    passwordHash: env.VITE_STUDENT_PASSWORD_HASH || "",
    name: env.VITE_STUDENT_NAME || "Student",
    role: env.VITE_STUDENT_ROLE || "Student",
  },
].filter((account) => account.email && account.passwordHash);
