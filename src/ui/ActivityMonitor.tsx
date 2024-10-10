// src/ui/ActivityMonitor.tsx

import React, { useState, useEffect } from 'react';

const ActivityMonitor: React.FC = () => {
  const [currentActivity, setCurrentActivity] = useState('Unknown');
  const [confidence, setConfidence] = useState('N/A');

  useEffect(() => {
    // TODO: Subscribe to activity recognition updates
  }, []);

  const startRecognition = () => {
    // TODO: Start recognition process
    setCurrentActivity('Recognizing...');
  };

  const stopRecognition = () => {
    // TODO: Stop recognition process
    setCurrentActivity('Stopped');
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Current Activity: {currentActivity}</h1>
      <p className="text-lg">Confidence: {confidence}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
        onClick={startRecognition}
      >
        Start
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 m-2 rounded"
        onClick={stopRecognition}
      >
        Stop
      </button>
    </div>
  );
};

export default ActivityMonitor;
