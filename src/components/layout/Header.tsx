'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { navLinks, siteConfig } from '@/data';
import { WebsiteLogo } from '@/components/icons';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Menu, X, Linkedin } from 'lucide-react';
import { useState, useMemo } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = useMemo(
    () => navLinks.map((l) => l.href.replace('#', '')),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <WebsiteLogo />
          </a>

          {/* Desktop Navigation - Radix UI Navigation Menu */}
          <NavigationMenu.Root className="hidden md:block">
            <NavigationMenu.List className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = `#${activeSection}` === link.href;
                return (
                  <NavigationMenu.Item key={link.href}>
                    <NavigationMenu.Link
                      href={link.href}
                      className={cn(
                        'relative px-4 py-2 text-sm font-medium',
                        'transition-colors rounded-md',
                        'hover:bg-background-secondary/50',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                        isActive
                          ? 'text-text-primary'
                          : 'text-text-muted hover:text-text-primary'
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue" />
                      )}
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                );
              })}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Social Link & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-brand-blue transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Mobile Menu Toggle */}
            <Collapsible.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Collapsible.Trigger
                className="md:hidden p-2 text-text-muted hover:text-text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Collapsible.Trigger>
            </Collapsible.Root>
          </div>
        </div>

        {/* Mobile Navigation - Radix UI Collapsible */}
        <Collapsible.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <VisuallyHidden.Root>
            <Collapsible.Trigger>Toggle mobile menu</Collapsible.Trigger>
          </VisuallyHidden.Root>
          <Collapsible.Content className="md:hidden overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <nav className="py-4 border-t border-border/50">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = `#${activeSection}` === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'px-4 py-3 text-sm font-medium transition-colors rounded-md',
                        'hover:bg-background-secondary/50',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue',
                        isActive
                          ? 'text-text-primary bg-background-secondary/30'
                          : 'text-text-muted hover:text-text-primary'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </nav>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
    </header>
  );
}
