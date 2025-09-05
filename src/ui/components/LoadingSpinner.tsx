// src/ui/components/LoadingSpinner.tsx

import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center h-screen">
    {/* The spinner itself */}
    <div className="loader" />
  </div>
);

export default LoadingSpinner;
