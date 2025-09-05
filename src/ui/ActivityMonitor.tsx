// src/ui/ActivityMonitor.tsx

import React, { useState, useRef, useEffect } from 'react';

const ActivityMonitor: React.FC = () => {
  const [currentActivity, setCurrentActivity] = useState('Unknown');
  const [confidence, setConfidence] = useState('N/A');
  const [error, setError] = useState<string | null>(null);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    return () => {
      // Clean up the WebSocket when component unmounts
      wsRef.current?.close();
      wsRef.current = null;
    };
  }, []);

  const startRecognition = () => {
    if (wsRef.current) return; // Already running

    try {
      const ws = new WebSocket('ws://localhost:8080');
      wsRef.current = ws;

      ws.onopen = () => setError(null);

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.activity) {
            setCurrentActivity(data.activity);
          }
          if (data.confidence !== undefined) {
            setConfidence(`${(Number(data.confidence) * 100).toFixed(2)}%`);
          }
        } catch (e) {
          console.error('Failed to parse message', e);
        }
      };

      ws.onerror = () => {
        setError('Connection error');
      };

      ws.onclose = () => {
        wsRef.current = null;
        setCurrentActivity('Stopped');
      };
    } catch (err) {
      setError('Failed to connect');
    }
  };

  const stopRecognition = () => {
    wsRef.current?.close();
    wsRef.current = null;
    setCurrentActivity('Stopped');
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Current Activity: {currentActivity}</h1>
      <p className="text-lg">Confidence: {confidence}</p>
      {error && <p className="text-red-500">{error}</p>}
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
