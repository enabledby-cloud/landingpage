import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ServicesSection } from './ServicesSection';

describe('ServicesSection', () => {
  it('renders the services section with title', () => {
    render(<ServicesSection />);
    
    expect(screen.getByText('What I Do')).toBeInTheDocument();
  });

  it('renders all service cards', () => {
    render(<ServicesSection />);
    
    expect(screen.getByText('Cloud & DevOps Transformation')).toBeInTheDocument();
    expect(screen.getByText(/Financial Operations/)).toBeInTheDocument();
    expect(screen.getByText(/Platform Engineering/)).toBeInTheDocument();
    expect(screen.getByText('Cloud Security & Governance')).toBeInTheDocument();
  });

  it('renders service descriptions when expanded', () => {
    render(<ServicesSection />);
    
    fireEvent.click(screen.getByText('Cloud & DevOps Transformation'));
    expect(screen.getByText(/operating models that scale/)).toBeInTheDocument();
  });
});
