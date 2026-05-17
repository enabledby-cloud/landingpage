import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';

describe('Card', () => {
  it('renders with default variant', () => {
    render(<Card data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('rounded-lg', 'border');
  });

  it('renders with elevated variant', () => {
    render(<Card variant="elevated" data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('shadow-xl');
  });

  it('renders with different padding sizes', () => {
    const { rerender } = render(<Card padding="sm" data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).toHaveClass('p-4');

    rerender(<Card padding="lg" data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).toHaveClass('p-8');

    rerender(<Card padding="none" data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).not.toHaveClass('p-4', 'p-6', 'p-8');
  });

  it('renders card header with title and description', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
      </Card>
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders card content and footer', () => {
    render(
      <Card>
        <CardContent>Main Content</CardContent>
        <CardFooter>Footer Content</CardFooter>
      </Card>
    );
    
    expect(screen.getByText('Main Content')).toBeInTheDocument();
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  it('renders as child element when asChild is true', () => {
    render(
      <Card asChild variant="elevated">
        <article data-testid="article-card">Article Content</article>
      </Card>
    );
    const article = screen.getByTestId('article-card');
    expect(article).toBeInTheDocument();
    expect(article.tagName.toLowerCase()).toBe('article');
    expect(article).toHaveClass('shadow-xl');
  });
});
