// src/context/AuthContext.tsx

import React, { createContext, useReducer, useContext, useEffect } from 'react';

interface AuthState {
  user: string | null;
  onboardingComplete: boolean;
}

type AuthAction =
  | { type: 'LOGIN'; username: string }
  | { type: 'LOGOUT' }
  | { type: 'COMPLETE_ONBOARDING' };

interface AuthContextType extends AuthState {
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  completeOnboarding: () => void;
}

const initialState: AuthState = { user: null, onboardingComplete: false };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.username };
    case 'LOGOUT':
      return { user: null, onboardingComplete: false };
    case 'COMPLETE_ONBOARDING':
      return { ...state, onboardingComplete: true };
    default:
      return state;
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, () => {
    try {
      const stored = localStorage.getItem('auth');
      return stored ? JSON.parse(stored) : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(state));
  }, [state]);

  const login = async (username: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Replace with real authentication logic
      if (username === 'admin' && password === 'password') {
        dispatch({ type: 'LOGIN', username });
        resolve();
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  };

  const logout = (): void => {
    dispatch({ type: 'LOGOUT' });
  };

  const completeOnboarding = (): void => {
    dispatch({ type: 'COMPLETE_ONBOARDING' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, completeOnboarding }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
