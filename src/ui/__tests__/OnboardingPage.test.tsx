const mockComplete = jest.fn();
const mockNavigate = jest.fn();

jest.mock('../../context/AuthContext', () => ({
  useAuth: () => ({ completeOnboarding: mockComplete }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import OnboardingPage from '../OnboardingPage';

describe('OnboardingPage', () => {
  it('completes onboarding and navigates to admin', async () => {
    render(
      <MemoryRouter>
        <OnboardingPage />
      </MemoryRouter>
    );
    await userEvent.click(screen.getByRole('button', { name: /complete onboarding/i }));
    expect(mockComplete).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/admin');
  });
});
