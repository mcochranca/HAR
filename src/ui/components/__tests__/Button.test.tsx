import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('renders with provided text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Press</Button>);
    fireEvent.click(screen.getByRole('button', { name: /press/i }));
    expect(handleClick).toHaveBeenCalled();
  });
});
