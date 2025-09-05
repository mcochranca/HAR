import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  const setup = () =>
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

  it('renders brand link', () => {
    setup();
    expect(screen.getByText('HAR System')).toBeInTheDocument();
  });

  it('toggles menu visibility', () => {
    setup();
    const toggle = screen.getByRole('button');
    const menu = screen.getByText('Home').parentElement as HTMLElement;
    expect(menu.className).toMatch(/hidden/);
    fireEvent.click(toggle);
    expect(menu.className).toMatch(/block/);
  });
});
