import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './components/Button';

const OnboardingPage: React.FC = () => {
  const { completeOnboarding } = useAuth();
  const navigate = useNavigate();

  const handleComplete = () => {
    completeOnboarding();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome</h2>
        <p className="mb-4">Let's finish setting up your account.</p>
        <Button variant="primary" onClick={handleComplete} className="w-full">
          Complete Onboarding
        </Button>
      </div>
    </div>
  );
};

export default OnboardingPage;
