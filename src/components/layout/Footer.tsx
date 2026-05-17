'use client';

import * as React from 'react';
import { footerData } from '@/data';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background-secondary/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex flex-col items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <span>&copy; {footerData.copyright}</span>
            {footerData.madeWith && (
              <>
                <span>•</span>
                <span>{footerData.madeWith}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
