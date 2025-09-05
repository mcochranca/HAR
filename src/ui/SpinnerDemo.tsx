// src/ui/SpinnerDemo.tsx
// A simple page to demonstrate the loading spinner animation.

import React from 'react';
import LoadingSpinner from './components/LoadingSpinner';

const SpinnerDemo: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
    <h1 className="text-2xl font-bold">Spinner Demo</h1>
    <LoadingSpinner />
  </div>
);

export default SpinnerDemo;
