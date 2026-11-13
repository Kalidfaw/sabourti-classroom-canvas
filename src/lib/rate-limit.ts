/**
 * Best-effort in-memory rate limiting for the contact form.
 *
 * State lives in the current worker isolate / node process only, so it is not a
 * global guarantee across a fleet of workers. It still blocks the common case of
 * a client hammering the endpoint from one instance, and complements the
 * honeypot. A durable global limit would require the D1 database and is left to
 * that binding when available.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const MAX_TRACKED_KEYS = 1000; // memory guard for hostile key spray

const buckets = new Map<string, number[]>();

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

export function checkRateLimit(key: string, now: number = Date.now()): RateLimitResult {
  const windowStart = now - WINDOW_MS;
  const recent = (buckets.get(key) ?? []).filter((t) => t > windowStart);

  if (recent.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    const oldest = recent[0] ?? now;
    const retryAfterSeconds = Math.max(1, Math.ceil((oldest + WINDOW_MS - now) / 1000));
    buckets.set(key, recent);
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  if (buckets.size >= MAX_TRACKED_KEYS && !buckets.has(key)) {
    // Drop the stalest buckets first when full.
    for (const [k, v] of buckets) {
      if (buckets.size < MAX_TRACKED_KEYS) break;
      if (v.every((t) => t <= windowStart)) buckets.delete(k);
    }
    if (buckets.size >= MAX_TRACKED_KEYS) buckets.clear();
  }
  buckets.set(key, recent);
  return { allowed: true, retryAfterSeconds: 0 };
}

/** Test helper: reset all buckets. */
export function resetRateLimits(): void {
  buckets.clear();
}
