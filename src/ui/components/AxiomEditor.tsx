import React, { useState } from 'react';

const AxiomEditor: React.FC = () => {
  const [lowLevelActivity, setLowLevelActivity] = useState<string>('');
  const [highLevelActivity, setHighLevelActivity] = useState<string>('');
  const [probability, setProbability] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement axiom saving logic
    console.log('Axiom saved:', { lowLevelActivity, highLevelActivity, probability });
    // Reset form
    setLowLevelActivity('');
    setHighLevelActivity('');
    setProbability('');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Axiom Editor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="lowLevelActivity" className="block text-sm font-medium text-gray-700">
            Low-Level Activity
          </label>
          <input
            type="text"
            id="lowLevelActivity"
            value={lowLevelActivity}
            onChange={(e) => setLowLevelActivity(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="highLevelActivity" className="block text-sm font-medium text-gray-700">
            High-Level Activity
          </label>
          <input
            type="text"
            id="highLevelActivity"
            value={highLevelActivity}
            onChange={(e) => setHighLevelActivity(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="probability" className="block text-sm font-medium text-gray-700">
            Probability
          </label>
          <input
            type="number"
            id="probability"
            value={probability}
            onChange={(e) => setProbability(e.target.value)}
            min="0"
            max="1"
            step="0.01"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Save Axiom
        </button>
      </form>
    </div>
  );
};

export default AxiomEditor;