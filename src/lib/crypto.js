// Small Web Crypto (SubtleCrypto) helpers used by the auth system.
//
// - sha256Hex()      → salted password hashing (used to check logins
//                       against the hashes stored in .env)
// - encryptJSON()     → AES-GCM encrypts the session object before it's
// - decryptJSON()       saved to localStorage, and decrypts it back
//
// These run entirely in the browser — no server required — which is
// fine for a demo, but keep in mind that any secret shipped to the
// browser (VITE_* env vars included) can be read by whoever opens
// devtools. A production app should verify credentials on a server.

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function bytesToHex(bytes) {
  return [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function bytesToBase64(bytes) {
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
}

function base64ToBytes(b64) {
  return Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
}

/** SHA-256 hash of a string, returned as lowercase hex. */
export async function sha256Hex(text) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(text));
  return bytesToHex(new Uint8Array(digest));
}

/** Derives a 256-bit AES-GCM key from an arbitrary-length secret string. */
async function deriveAesKey(secret) {
  const rawKey = await crypto.subtle.digest("SHA-256", encoder.encode(secret));
  return crypto.subtle.importKey("raw", rawKey, "AES-GCM", false, [
    "encrypt",
    "decrypt",
  ]);
}

/** Encrypts a JSON-serializable value. Returns an opaque "iv.ciphertext" string. */
export async function encryptJSON(value, secret) {
  const key = await deriveAesKey(secret);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const plaintext = encoder.encode(JSON.stringify(value));
  const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);
  return `${bytesToBase64(iv)}.${bytesToBase64(new Uint8Array(ciphertext))}`;
}

/** Reverses encryptJSON(). Throws if the token is malformed, tampered with, or the secret is wrong. */
export async function decryptJSON(token, secret) {
  const [ivB64, cipherB64] = String(token || "").split(".");
  if (!ivB64 || !cipherB64) throw new Error("Malformed session token");
  const key = await deriveAesKey(secret);
  const iv = base64ToBytes(ivB64);
  const ciphertext = base64ToBytes(cipherB64);
  const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
  return JSON.parse(decoder.decode(plaintext));
}
