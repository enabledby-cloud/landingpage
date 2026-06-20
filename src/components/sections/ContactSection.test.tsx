import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactSection } from './ContactSection';

describe('ContactSection', () => {
  it('renders the section with title', () => {
    render(<ContactSection />);

    expect(screen.getByText('Say Hi')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<ContactSection />);

    expect(screen.getByText(/Always up for conversations/)).toBeInTheDocument();
  });

  it('renders the email button', () => {
    render(<ContactSection />);

    const emailLink = screen.getByRole('link', { name: /email me/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:mszalewski@ownpixel.com');
  });

  it('renders the LinkedIn button', () => {
    render(<ContactSection />);

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the CV link', () => {
    render(<ContactSection />);

    const cvLink = screen.getByRole('link', { name: /view my cv/i });
    expect(cvLink).toHaveAttribute('target', '_blank');
    expect(cvLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
