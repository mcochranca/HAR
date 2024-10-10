import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// src/main.ts

import { SensorManager } from './sensors/sensorCollection';
import { DataPreprocessor } from './preprocessing/dataPreprocessing';
import { OntologyPopulator } from './ontology/ontologyPopulation';
import { ProbabilisticReasoner } from './reasoning/probabilisticReasoning';
import { DatabaseManager } from './database/databaseManager';
import { SENSOR_IDS } from './config/config';

// Initialize components
const sensorManager = new SensorManager(SENSOR_IDS);
const dataPreprocessor = new DataPreprocessor();
const ontologyPopulator = new OntologyPopulator();
const reasoner = new ProbabilisticReasoner();
const dbManager = new DatabaseManager();

async function main() {
  await dbManager.initialize();

  // Start sensor data collection
  sensorManager.startCollection();

  // Simulate data processing loop
  setInterval(() => {
    dataPreprocessor.processData();

    // Processed data handling
    while (dataPreprocessor.processedDataQueue.length > 0) {
      const processedData = dataPreprocessor.processedDataQueue.shift();
      if (processedData) {
        // Infer high-level activities
        const highLevelProbabilities = reasoner.inferHighLevelActivity(processedData.probabilities);
        console.log(`High-Level Probabilities: ${JSON.stringify(highLevelProbabilities)}`);

        // Populate ontology
        ontologyPopulator.addInstance(processedData);

        // Insert into database
        dbManager.insertInstance(processedData);

        // TODO: Update UI or take other actions
      }
    }
  }, 1000); // Adjust interval as needed
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  sensorManager.stopCollection();
  ontologyPopulator.saveOntology();
  await dbManager.close();
  console.log('Application terminated.');
  process.exit();
});

main();
