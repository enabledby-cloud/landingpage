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
    
    expect(screen.getByText('Platform Engineering and Developer Enablement')).toBeInTheDocument();
    expect(screen.getByText('FinOps and Cost Optimization')).toBeInTheDocument();
    expect(screen.getByText('Cloud and DevOps')).toBeInTheDocument();
    expect(screen.getByText('Cloud Security')).toBeInTheDocument();
  });

  it('renders service descriptions when expanded', () => {
    render(<ServicesSection />);
    
    fireEvent.click(screen.getByText('Cloud and DevOps'));
    expect(screen.getByText(/scalable operating models/)).toBeInTheDocument();
  });
});
