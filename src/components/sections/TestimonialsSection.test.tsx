import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TestimonialsSection } from './TestimonialsSection';

describe('TestimonialsSection', () => {
  it('renders the testimonials section with title', () => {
    render(<TestimonialsSection />);

    expect(screen.getByText('Kudos')).toBeInTheDocument();
  });

  it('renders featured testimonial authors in grid', () => {
    render(<TestimonialsSection />);

    // Top 6 by seniority are shown
    expect(screen.getByText('Joe Stevens')).toBeInTheDocument();
    expect(screen.getByText('Boris Gonev')).toBeInTheDocument();
    expect(screen.getByText('Jean Favreau')).toBeInTheDocument();
    expect(screen.getByText('Cemal Acar')).toBeInTheDocument();
    expect(screen.getByText('Philipp Horns')).toBeInTheDocument();
    expect(screen.getByText('Dennis Kribl')).toBeInTheDocument();
  });

  it('renders LinkedIn link', () => {
    render(<TestimonialsSection />);

    const link = screen.getByRole('link', { name: /view all.*recommendations on linkedin/i });
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/marvyn-zalewski/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders avatar initials', () => {
    render(<TestimonialsSection />);

    expect(screen.getByText('JS')).toBeInTheDocument();
    expect(screen.getByText('BG')).toBeInTheDocument();
    expect(screen.getByText('CA')).toBeInTheDocument();
  });

  it('renders headlines as primary content', () => {
    render(<TestimonialsSection />);

    expect(screen.getByText(/An excellent management lead/)).toBeInTheDocument();
    expect(screen.getByText(/A natural leader who communicates/)).toBeInTheDocument();
  });

  it('renders clickable cards for full quotes', () => {
    render(<TestimonialsSection />);

    // Cards are buttons that open modal
    const cards = screen.getAllByRole('button');
    expect(cards.length).toBe(6);
  });
});
