const buckets = new Map<string, number[]>();

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
  now = Date.now(),
) {
  const recent = (buckets.get(key) ?? []).filter((stamp) => now - stamp < windowMs);
  if (recent.length >= limit) {
    buckets.set(key, recent);
    const retryAfter = Math.max(1, Math.ceil((windowMs - (now - recent[0])) / 1000));
    return { ok: false as const, retryAfter };
  }
  recent.push(now);
  buckets.set(key, recent);
  return { ok: true as const };
}

export function resetRateLimit() {
  buckets.clear();
}

export function isAllowedOrigin(origin: string | null, host: string | null) {
  if (!origin) return true;
  try {
    const url = new URL(origin);
    if (host && url.host === host) return true;
    const extra = (process.env.ALLOWED_ORIGINS ?? "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    return extra.includes(origin);
  } catch {
    return false;
  }
}

export function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}
