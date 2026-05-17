import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GradientText, Heading, Text, Code } from './typography';

describe('GradientText', () => {
  it('renders with default gradient', () => {
    render(<GradientText>Gradient</GradientText>);
    const text = screen.getByText('Gradient');
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('bg-clip-text', 'text-transparent');
  });

  it('renders with different gradient variants', () => {
    const { rerender } = render(<GradientText gradient="pink">Pink</GradientText>);
    expect(screen.getByText('Pink')).toHaveClass('from-brand-pink');

    rerender(<GradientText gradient="blue">Blue</GradientText>);
    expect(screen.getByText('Blue')).toHaveClass('from-brand-purple', 'to-brand-blue');
  });
});

describe('Heading', () => {
  it('renders as h2 by default', () => {
    render(<Heading>Default Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Default Heading');
  });

  it('renders with different heading levels', () => {
    const { rerender } = render(<Heading as="h1">H1 Heading</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    rerender(<Heading as="h3">H3 Heading</Heading>);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();

    rerender(<Heading as="h4">H4 Heading</Heading>);
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
  });

  it('applies correct styles for h1', () => {
    render(<Heading as="h1">Large Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('font-extrabold', 'tracking-tighter');
  });
});

describe('Text', () => {
  it('renders with default variant', () => {
    render(<Text>Default text</Text>);
    const text = screen.getByText('Default text');
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('text-text-secondary');
  });

  it('renders with muted variant', () => {
    render(<Text variant="muted">Muted text</Text>);
    expect(screen.getByText('Muted text')).toHaveClass('text-text-muted');
  });

  it('renders with small variant', () => {
    render(<Text variant="small">Small text</Text>);
    expect(screen.getByText('Small text')).toHaveClass('text-xs');
  });
});

describe('Code', () => {
  it('renders inline code', () => {
    render(<Code>const x = 1</Code>);
    const code = screen.getByText('const x = 1');
    expect(code).toBeInTheDocument();
    expect(code).toHaveClass('font-mono');
  });
});
