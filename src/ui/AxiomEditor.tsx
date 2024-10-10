// src/ui/AxiomEditor.tsx

import React, { useState } from 'react';
import { Axiom } from '../reasoning/assertionAxioms';

const AxiomEditor: React.FC = () => {
  const [lowLevelActivity, setLowLevelActivity] = useState('');
  const [highLevelActivity, setHighLevelActivity] = useState('');
  const [probability, setProbability] = useState(0);

  const saveAxiom = () => {
    const newAxiom: Axiom = {
      lowLevelActivity,
      highLevelActivity,
      probability,
    };
    // TODO: Save the axiom to the database or file
    console.log('Saved Axiom:', newAxiom);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Axiom Editor</h2>
      <div className="mb-2">
        <label className="block">Low-Level Activity:</label>
        <input
          type="text"
          value={lowLevelActivity}
          onChange={(e) => setLowLevelActivity(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-2">
        <label className="block">High-Level Activity:</label>
        <input
          type="text"
          value={highLevelActivity}
          onChange={(e) => setHighLevelActivity(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-2">
        <label className="block">Probability:</label>
        <input
          type="number"
          value={probability}
          onChange={(e) => setProbability(parseFloat(e.target.value))}
          className="border rounded w-full py-2 px-3"
          min="0"
          max="1"
          step="0.01"
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={saveAxiom}
      >
        Save Axiom
      </button>
    </div>
  );
};

export default AxiomEditor;
