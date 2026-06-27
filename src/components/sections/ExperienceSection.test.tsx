import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExperienceSection } from './ExperienceSection';

describe('ExperienceSection', () => {
  it('renders the section with title', () => {
    render(<ExperienceSection />);

    expect(screen.getByRole('heading', { name: /Career/i })).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<ExperienceSection />);

    expect(screen.getByText(/decade of engineering leadership/)).toBeInTheDocument();
  });

  it('renders experience companies', () => {
    render(<ExperienceSection />);

    expect(screen.getAllByText('Awin Global').length).toBeGreaterThanOrEqual(1);
  });

  it('renders experience titles', () => {
    render(<ExperienceSection />);

    expect(screen.getByText('Engineering Manager for Cloud Platforms - Cloud Platform')).toBeInTheDocument();
  });

  it('renders skills badges', () => {
    render(<ExperienceSection />);

    expect(screen.getAllByText('AWS').length).toBeGreaterThanOrEqual(1);
  });

  it('renders the competencies summary', () => {
    render(<ExperienceSection />);

    expect(screen.getByText('Core Competencies')).toBeInTheDocument();
  });

  it('renders achievements', () => {
    render(<ExperienceSection />);

    expect(screen.getAllByText(/FinOps function/).length).toBeGreaterThanOrEqual(1);
  });
});
