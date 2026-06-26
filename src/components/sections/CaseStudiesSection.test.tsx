import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CaseStudiesSection } from './CaseStudiesSection';

describe('CaseStudiesSection', () => {
  it('renders the section with title', () => {
    render(<CaseStudiesSection />);

    expect(screen.getByText('Results')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<CaseStudiesSection />);

    expect(screen.getByText(/Real challenges with measurable outcomes/)).toBeInTheDocument();
  });

  it('renders all case study tabs', () => {
    render(<CaseStudiesSection />);

    expect(screen.getByText('FinOps Initial Analysis')).toBeInTheDocument();
    expect(screen.getByText('Modernizing Software Logistics for 150+ Engineers')).toBeInTheDocument();
    expect(screen.getByText('Identity and Access Modernization')).toBeInTheDocument();
  });

  it('displays the first case study content by default', () => {
    render(<CaseStudiesSection />);

    expect(screen.getByText(/annual spend of \$3\.5M\+/)).toBeInTheDocument();
  });

  it('switches case study when a tab is clicked', () => {
    render(<CaseStudiesSection />);

    fireEvent.click(screen.getByText('Modernizing Software Logistics for 150+ Engineers'));

    expect(screen.getByText(/outdated on-prem CI\/CD system/)).toBeInTheDocument();
  });

  it('renders tags for the active case study', () => {
    render(<CaseStudiesSection />);

    expect(screen.getByText('FinOps')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
  });

  it('renders the result for the active case study', () => {
    render(<CaseStudiesSection />);

    expect(screen.getByText(/\$1M in annualized savings/)).toBeInTheDocument();
  });
});
