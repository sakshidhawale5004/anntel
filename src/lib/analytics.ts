// Lightweight client-side analytics. Buffers events to localStorage and
// dispatches to window.dataLayer / gtag when available. No PII.
export type AnalyticsEvent = {
  name: string;
  page?: string;
  props?: Record<string, string | number | boolean | undefined>;
  ts?: number;
};

const KEY = "anntel:analytics:v1";
const MAX = 200;

export function track(name: string, props?: AnalyticsEvent["props"]) {
  if (typeof window === "undefined") return;
  const evt: AnalyticsEvent = {
    name,
    page: window.location.pathname,
    props,
    ts: Date.now(),
  };
  try {
    const raw = window.localStorage.getItem(KEY);
    const arr: AnalyticsEvent[] = raw ? JSON.parse(raw) : [];
    arr.push(evt);
    while (arr.length > MAX) arr.shift();
    window.localStorage.setItem(KEY, JSON.stringify(arr));
  } catch {
    /* storage may be unavailable */
  }
  // Forward to GA / GTM if present
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer?.push({ event: name, ...evt });
  w.gtag?.("event", name, { page: evt.page, ...evt.props });
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", name, evt.props ?? {});
  }
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
