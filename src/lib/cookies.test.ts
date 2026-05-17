import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  hasConsent,
  getPreferences,
  savePreferences,
  acceptAll,
  acceptNecessary,
  resetConsent,
  COOKIE_CONSENT_KEY,
  COOKIE_PREFERENCES_KEY,
  type CookiePreferences,
} from './cookies';

describe('Cookie Utilities', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('hasConsent', () => {
    it('returns false when no consent given', () => {
      expect(hasConsent()).toBe(false);
    });

    it('returns true when consent is given', () => {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
      expect(hasConsent()).toBe(true);
    });
  });

  describe('getPreferences', () => {
    it('returns default preferences when none stored', () => {
      const prefs = getPreferences();
      expect(prefs).toEqual({
        necessary: true,
        analytics: false,
        marketing: false,
      });
    });

    it('returns stored preferences', () => {
      const stored: CookiePreferences = {
        necessary: true,
        analytics: true,
        marketing: false,
      };
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(stored));
      
      const prefs = getPreferences();
      expect(prefs).toEqual(stored);
    });

    it('returns default preferences on invalid JSON', () => {
      localStorage.setItem(COOKIE_PREFERENCES_KEY, 'invalid-json');
      const prefs = getPreferences();
      expect(prefs.necessary).toBe(true);
    });
  });

  describe('savePreferences', () => {
    it('saves preferences to localStorage', () => {
      const prefs: CookiePreferences = {
        necessary: true,
        analytics: true,
        marketing: true,
      };
      
      savePreferences(prefs);
      
      expect(localStorage.getItem(COOKIE_CONSENT_KEY)).toBe('true');
      expect(JSON.parse(localStorage.getItem(COOKIE_PREFERENCES_KEY) || '{}')).toEqual(prefs);
    });

    it('dispatches custom event', () => {
      const handler = vi.fn();
      window.addEventListener('cookie-consent-updated', handler);
      
      const prefs: CookiePreferences = {
        necessary: true,
        analytics: true,
        marketing: false,
      };
      
      savePreferences(prefs);
      
      expect(handler).toHaveBeenCalled();
      window.removeEventListener('cookie-consent-updated', handler);
    });
  });

  describe('acceptAll', () => {
    it('sets all preferences to true', () => {
      const prefs = acceptAll();
      
      expect(prefs).toEqual({
        necessary: true,
        analytics: true,
        marketing: true,
      });
      expect(hasConsent()).toBe(true);
    });
  });

  describe('acceptNecessary', () => {
    it('sets only necessary to true', () => {
      const prefs = acceptNecessary();
      
      expect(prefs).toEqual({
        necessary: true,
        analytics: false,
        marketing: false,
      });
      expect(hasConsent()).toBe(true);
    });
  });

  describe('resetConsent', () => {
    it('removes all consent data', () => {
      acceptAll();
      expect(hasConsent()).toBe(true);
      
      resetConsent();
      
      expect(hasConsent()).toBe(false);
      expect(localStorage.getItem(COOKIE_CONSENT_KEY)).toBeNull();
      expect(localStorage.getItem(COOKIE_PREFERENCES_KEY)).toBeNull();
    });
  });
});
