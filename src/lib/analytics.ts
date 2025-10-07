export type AnalyticsEventParams = {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

export function trackEvent(action: string, params: AnalyticsEventParams = {}): void {
  if (typeof window === "undefined") return;
  // Gracefully no-op if gtag isn't available yet
  const gtagFn = (window as any).gtag as undefined | ((...args: unknown[]) => void);
  if (!gtagFn) return;

  gtagFn("event", action, params);
}



