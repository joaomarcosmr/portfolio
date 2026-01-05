// Facebook Pixel helper functions

declare global {
  interface Window {
    fbq?: (
      action: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
  }
}

/**
 * Track custom Facebook Pixel event
 */
export const trackFacebookEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params);
  }
};

/**
 * Track "Clicked on Contact Button" event
 */
export const trackContactButtonClick = () => {
  trackFacebookEvent("ClickedOnContactButton");
};

/**
 * Track Purchase event for Facebook Pixel
 */
export const trackPurchase = (value?: number, currency: string = "EUR", contentName?: string) => {
  if (typeof window !== "undefined" && window.fbq) {
    const params: Record<string, any> = {};
    if (value) {
      params.value = value;
      params.currency = currency;
    }
    if (contentName) {
      params.content_name = contentName;
    }
    window.fbq("track", "Purchase", params);
  }
};

