import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './badge';

describe('Badge', () => {
  it('renders with default variant', () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText('Default Badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-brand-blue/10', 'text-brand-blue');
  });

  it('renders with pink variant', () => {
    render(<Badge variant="pink">Pink Badge</Badge>);
    const badge = screen.getByText('Pink Badge');
    expect(badge).toHaveClass('bg-brand-pink/10', 'text-brand-pink');
  });

  it('renders with purple variant', () => {
    render(<Badge variant="purple">Purple Badge</Badge>);
    const badge = screen.getByText('Purple Badge');
    expect(badge).toHaveClass('bg-brand-purple/10', 'text-brand-purple');
  });

  it('renders with status variants', () => {
    const { rerender } = render(<Badge variant="success">Success</Badge>);
    expect(screen.getByText('Success')).toHaveClass('text-status-success');

    rerender(<Badge variant="warning">Warning</Badge>);
    expect(screen.getByText('Warning')).toHaveClass('text-status-warning');

    rerender(<Badge variant="error">Error</Badge>);
    expect(screen.getByText('Error')).toHaveClass('text-status-error');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>);
    expect(screen.getByText('Custom')).toHaveClass('custom-class');
  });

  it('renders as child element when asChild is true', () => {
    render(
      <Badge asChild variant="success">
        <a href="/test">Link Badge</a>
      </Badge>
    );
    const link = screen.getByRole('link', { name: 'Link Badge' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveClass('text-status-success');
  });
});
