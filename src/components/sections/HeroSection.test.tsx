import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { HeroSection } from './HeroSection';

describe('HeroSection', () => {
  it('renders the hero section with greeting', () => {
    render(<HeroSection />);
    
    // Check for the greeting
    expect(screen.getByText(/Moin/)).toBeInTheDocument();
    expect(screen.getByText(/Marvyn/)).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<HeroSection />);
    
    expect(screen.getByText(/Engineering Leader & Cloud Strategist/)).toBeInTheDocument();
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
