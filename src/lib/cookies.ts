/**
 * Cookie consent configuration and utilities
 */

export interface CookiePreferences {
  necessary: boolean; // Always true, required for site functionality
  analytics: boolean;
  marketing: boolean;
}

export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const COOKIE_PREFERENCES_KEY = 'cookie-preferences';

export const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

/**
 * Check if user has given consent
 */
export function hasConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === 'true';
}

/**
 * Get stored cookie preferences
 */
export function getPreferences(): CookiePreferences {
  if (typeof window === 'undefined') return defaultPreferences;
  
  const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!stored) return defaultPreferences;
  
  try {
    return { ...defaultPreferences, ...JSON.parse(stored) };
  } catch {
    return defaultPreferences;
  }
}

/**
 * Save cookie preferences
 */
export function savePreferences(preferences: CookiePreferences): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
  
  // Dispatch custom event for analytics integration
  window.dispatchEvent(
    new CustomEvent('cookie-consent-updated', { detail: preferences })
  );
}

/**
 * Accept all cookies
 */
export function acceptAll(): CookiePreferences {
  const preferences: CookiePreferences = {
    necessary: true,
    analytics: true,
    marketing: true,
  };
  savePreferences(preferences);
  return preferences;
}

/**
 * Accept only necessary cookies
 */
export function acceptNecessary(): CookiePreferences {
  const preferences: CookiePreferences = {
    necessary: true,
    analytics: false,
    marketing: false,
  };
  savePreferences(preferences);
  return preferences;
}

/**
 * Reset consent (for testing or user request)
 */
export function resetConsent(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  localStorage.removeItem(COOKIE_PREFERENCES_KEY);
}
