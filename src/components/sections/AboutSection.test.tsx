import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutSection } from './AboutSection';

describe('AboutSection', () => {
  it('renders the about section with title', () => {
    render(<AboutSection />);
    
    expect(screen.getByText('My Approach')).toBeInTheDocument();
  });

  it('renders the profile avatar fallback', () => {
    render(<AboutSection />);
    // In jsdom, images don't load, so fallback initials are shown
    expect(screen.getByText('MZ')).toBeInTheDocument();
  });

  it('renders the approach paragraphs', () => {
    render(<AboutSection />);
    
    expect(screen.getByText(/people-centric/)).toBeInTheDocument();
    expect(screen.getByText(/community facilitator/)).toBeInTheDocument();
  });
});
