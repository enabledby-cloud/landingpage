import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TestimonialsSection } from './TestimonialsSection';

describe('TestimonialsSection', () => {
  it('renders the testimonials section with title', () => {
    render(<TestimonialsSection />);

    expect(screen.getByText('Kudos')).toBeInTheDocument();
  });

  it('renders testimonial authors in marquee', () => {
    render(<TestimonialsSection />);

    expect(screen.getAllByText('Philipp Horns').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Jean Favreau').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Dennis Kribl').length).toBeGreaterThanOrEqual(1);
  });

  it('renders LinkedIn link', () => {
    render(<TestimonialsSection />);

    const link = screen.getByRole('link', { name: /read all recommendations on linkedin/i });
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/marvyn-zalewski/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders avatar initials', () => {
    render(<TestimonialsSection />);

    expect(screen.getAllByText('PH').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('CA').length).toBeGreaterThanOrEqual(1);
  });
});
