import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

describe('Avatar', () => {
  it('renders Avatar with AvatarImage and AvatarFallback', () => {
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    );
    // In jsdom, images don't load, so fallback is shown
    expect(screen.getByText('U')).toBeInTheDocument();
  });

  it('renders fallback when no image is provided', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender, container } = render(
      <Avatar size="sm">
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
    );
    expect(container.firstChild).toHaveClass('w-8', 'h-8');

    rerender(
      <Avatar size="md">
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
    );
    expect(container.firstChild).toHaveClass('w-12', 'h-12');

    rerender(
      <Avatar size="lg">
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
    );
    expect(container.firstChild).toHaveClass('w-16', 'h-16');

    rerender(
      <Avatar size="xl">
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
    );
    expect(container.firstChild).toHaveClass('w-24', 'h-24');
  });

  it('applies custom className to Avatar', () => {
    render(
      <Avatar className="custom-class">
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('A').parentElement).toHaveClass('custom-class');
  });

  it('applies custom className to AvatarFallback', () => {
    render(
      <Avatar>
        <AvatarFallback className="custom-fallback">FB</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('FB')).toHaveClass('custom-fallback');
  });

  it('has proper base styles', () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
    );
    expect(container.firstChild).toHaveClass('rounded-full', 'overflow-hidden');
  });
});
