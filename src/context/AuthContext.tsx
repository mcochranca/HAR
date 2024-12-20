// src/context/AuthContext.tsx

import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  loginAsAdmin: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Load authentication state from localStorage on mount
  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    if (storedIsAdmin === 'true') {
      setIsAdmin(true);
    }
  }, []);

  // Function to handle admin login
  const loginAsAdmin = async (username: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Simulate authentication
      if (username === 'admin' && password === 'password') {
        setIsAdmin(true);
        localStorage.setItem('isAdmin', 'true');
        resolve();
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  };

  // Function to handle logout
  const logout = (): void => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, loginAsAdmin, logout }}>
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

/**
 * Notes:
 *
 * - Authentication State:
 *   - Manages `isAdmin` state to control access to admin routes.
 *
 * - Persistent Login:
 *   - Synchronizes login state with `localStorage` to persist across sessions.
 *   - Ensures `isAdmin` is initialized on app load.
 *
 * - Context API:
 *   - Provides `loginAsAdmin` and `logout` functions for authentication management.
 *
 * - Error Handling:
 *   - Throws an error if `useAuth` is used outside of `AuthProvider`.
 */
