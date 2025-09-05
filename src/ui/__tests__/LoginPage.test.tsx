const mockLogin = jest.fn();
const mockNavigate = jest.fn();

jest.mock('../../context/AuthContext', () => ({
  useAuth: () => ({ loginAsAdmin: mockLogin }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../LoginPage';

describe('LoginPage', () => {
  it('submits credentials and navigates on success', async () => {
    mockLogin.mockResolvedValueOnce(undefined);
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const usernameInput = screen.getByText('Username').nextElementSibling as HTMLInputElement;
    const passwordInput = screen.getByText('Password').nextElementSibling as HTMLInputElement;
    await userEvent.type(usernameInput, 'admin');
    await userEvent.type(passwordInput, 'password');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(mockLogin).toHaveBeenCalledWith('admin', 'password');
    expect(mockNavigate).toHaveBeenCalledWith('/admin');
  });
});
