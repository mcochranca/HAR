import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { simulateSensorData } from '../services/sensorSimulation';
import { processData } from '../services/dataProcessing';
import { inferHighLevelActivity } from '../services/probabilisticReasoning';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const [sensorData, setSensorData] = useState<number[]>([]);
  const [currentActivity, setCurrentActivity] = useState<string>('Unknown');
  const [confidence, setConfidence] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = simulateSensorData();
      setSensorData(prevData => [...prevData.slice(-19), newData]);
      
      const processedData = processData(newData);
      const { activity, probability } = inferHighLevelActivity(processedData);
      
      setCurrentActivity(activity);
      setConfidence(probability);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: sensorData.map((_, index) => index.toString()),
    datasets: [
      {
        label: 'Sensor Data',
        data: sensorData,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sensor Data',
      },
    },
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Sidebar content */}
        </aside>
    
        {/* Main Content */}
        <main className="lg:col-span-3">
          {/* Main content */}
        </main>
      </div>
    </div>
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Human Activity Recognition Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Current Activity</h2>
        <p className="text-2xl font-bold text-indigo-600">{currentActivity}</p>
        <p className="text-lg">Confidence: {(confidence * 100).toFixed(2)}%</p>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Sensor Data</h2>
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
