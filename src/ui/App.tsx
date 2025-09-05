// src/ui/App.tsx

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { AuthProvider, useAuth } from '../context/AuthContext';
import LoadingSpinner from './components/LoadingSpinner'; // A spinner component

// Lazy-loaded components
const UserDashboard = lazy(() => import('./UserDashboard'));
const AdminDashboard = lazy(() => import('./AdminDashboard'));
const AxiomEditor = lazy(() => import('./components/AxiomEditor'));
const LoginPage = lazy(() => import('./LoginPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));
// Sample page demonstrating the loading spinner
const SpinnerDemo = lazy(() => import('./SpinnerDemo'));

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAdmin } = useAuth();
  return isAdmin ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<UserDashboard />} />
              <Route path="/login" element={<LoginPage />} />
              {/* Route to visualize the loading spinner */}
              <Route path="/spinner" element={<SpinnerDemo />} />
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute>
                    <AdminRoutes />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </AuthProvider>
  );
};

const AdminRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<AdminDashboard />} />
    <Route path="axioms" element={<AxiomEditor />} />
    {/* Add more admin routes here */}
  </Routes>
);

export default App;
