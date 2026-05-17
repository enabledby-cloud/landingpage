'use client';

import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Switch from '@radix-ui/react-switch';
import { X, Cookie, Settings, Shield } from 'lucide-react';
import { Button, Card, Text } from '@/components/ui';
import { cn } from '@/lib/utils';
import {
  hasConsent,
  getPreferences,
  savePreferences,
  acceptAll,
  acceptNecessary,
  type CookiePreferences,
} from '@/lib/cookies';

interface CookieConsentProps {
  /** Position of the banner */
  position?: 'bottom' | 'bottom-left' | 'bottom-right';
}

export function CookieConsent({ position = 'bottom' }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(getPreferences());

  useEffect(() => {
    // Only show banner if consent hasn't been given
    const timer = setTimeout(() => {
      if (!hasConsent()) {
        setIsVisible(true);
      }
    }, 1000); // Slight delay for better UX

    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = useCallback(() => {
    const newPrefs = acceptAll();
    setPreferences(newPrefs);
    setIsVisible(false);
    setShowSettings(false);
  }, []);

  const handleAcceptNecessary = useCallback(() => {
    const newPrefs = acceptNecessary();
    setPreferences(newPrefs);
    setIsVisible(false);
    setShowSettings(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    savePreferences(preferences);
    setIsVisible(false);
    setShowSettings(false);
  }, [preferences]);

  const updatePreference = useCallback((key: keyof CookiePreferences, value: boolean) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  }, []);

  const positionClasses = {
    bottom: 'bottom-0 left-0 right-0 mx-auto max-w-4xl',
    'bottom-left': 'bottom-4 left-4 max-w-md',
    'bottom-right': 'bottom-4 right-4 max-w-md',
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Banner */}
      <div
        className={cn(
          'fixed z-[100] p-4 animate-slide-up',
          positionClasses[position]
        )}
        role="dialog"
        aria-label="Cookie consent"
      >
        <Card variant="elevated" padding="lg" className="shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-2 rounded-lg bg-brand-purple/10">
              <Cookie className="w-6 h-6 text-brand-purple" />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Cookie Preferences
              </h3>
              <Text variant="muted" className="mb-4">
                We use cookies to enhance your browsing experience, analyze site traffic, 
                and personalize content. You can customize your preferences or accept all cookies.
              </Text>

              <div className="flex flex-wrap gap-3">
                <Button variant="gradient" size="sm" onClick={handleAcceptAll}>
                  Accept All
                </Button>
                <Button variant="outline" size="sm" onClick={handleAcceptNecessary}>
                  Necessary Only
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Customize
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Settings Dialog */}
      <Dialog.Root open={showSettings} onOpenChange={setShowSettings}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] animate-fade-in" />
          <Dialog.Content
            className={cn(
              'fixed z-[102] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              'w-full max-w-lg max-h-[85vh] overflow-auto',
              'bg-background-secondary border border-border rounded-xl shadow-2xl',
              'p-6 animate-slide-up focus:outline-none'
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="text-xl font-bold text-text-primary">
                Cookie Settings
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  className="p-2 rounded-md text-text-muted hover:text-text-primary hover:bg-background-tertiary transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Description className="text-text-muted mb-6">
              Manage your cookie preferences. Necessary cookies are always enabled 
              as they are essential for the website to function properly.
            </Dialog.Description>

            <div className="space-y-4">
              {/* Necessary Cookies */}
              <CookieOption
                title="Necessary Cookies"
                description="Essential for the website to function. Cannot be disabled."
                icon={<Shield className="w-5 h-5" />}
                checked={true}
                disabled
                onChange={() => {}}
              />

              {/* Analytics Cookies */}
              <CookieOption
                title="Analytics Cookies"
                description="Help us understand how visitors interact with our website by collecting anonymous information."
                checked={preferences.analytics}
                onChange={(checked) => updatePreference('analytics', checked)}
              />

              {/* Marketing Cookies */}
              <CookieOption
                title="Marketing Cookies"
                description="Used to track visitors across websites to display relevant advertisements."
                checked={preferences.marketing}
                onChange={(checked) => updatePreference('marketing', checked)}
              />
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-border">
              <Button variant="outline" onClick={handleAcceptNecessary}>
                Reject All
              </Button>
              <Button variant="gradient" onClick={handleSavePreferences}>
                Save Preferences
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

interface CookieOptionProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

function CookieOption({
  title,
  description,
  icon,
  checked,
  disabled,
  onChange,
}: CookieOptionProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border">
      {icon && (
        <div className="flex-shrink-0 p-2 rounded-md bg-brand-blue/10 text-brand-blue">
          {icon}
        </div>
      )}
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-medium text-text-primary">{title}</h4>
          <Switch.Root
            checked={checked}
            disabled={disabled}
            onCheckedChange={onChange}
            className={cn(
              'w-11 h-6 bg-background-tertiary rounded-full relative transition-colors',
              'data-[state=checked]:bg-brand-blue',
              'focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-background',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            <Switch.Thumb
              className={cn(
                'block w-5 h-5 bg-white rounded-full shadow-md transition-transform',
                'translate-x-0.5 data-[state=checked]:translate-x-[22px]'
              )}
            />
          </Switch.Root>
        </div>
        <Text variant="small">{description}</Text>
      </div>
    </div>
  );
}
