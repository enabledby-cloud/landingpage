import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';

import { HeroSection } from './HeroSection';

describe('HeroSection', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the hero section with greeting after typing completes', () => {
    render(<HeroSection />);

    // TypingText uses recursive setTimeout — advance enough to type all characters
    for (let i = 0; i < 50; i++) {
      act(() => { vi.advanceTimersByTime(100); });
    }

    expect(screen.getByText(/Moin/)).toBeInTheDocument();
    expect(screen.getByText(/Marvyn/)).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<HeroSection />);

    expect(screen.getByText(/Scale, Simplify, and Enable/)).toBeInTheDocument();
  });

  it('renders the greeting note', () => {
    render(<HeroSection />);

    expect(screen.getByText(/\*a greeting from North Germany/)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<HeroSection />);

    const ctaLink = screen.getByRole('link', { name: /get in touch/i });
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute('href', '#say-hi');
  });
});
