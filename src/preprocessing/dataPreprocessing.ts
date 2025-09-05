// src/preprocessing/dataPreprocessing.ts

import { SensorData } from '../sensors/sensorCollection';
import { extractFeaturesFromData } from './featureExtraction';
import { classifyLowLevelActivity } from '../classification/classifier';
import { OntologyPopulator } from '../ontology/ontologyPopulation';
import { DatabaseManager } from '../database/databaseManager';

interface ProcessedData {
  timestamp: number;
  features: any;
  probabilities: { [activity: string]: number };
}

class DataPreprocessor {
  rawDataQueue: SensorData[];
  processedDataQueue: ProcessedData[];
  ontologyPopulator: OntologyPopulator;
  dbManager: DatabaseManager;

  constructor(ontologyPopulator: OntologyPopulator, dbManager: DatabaseManager) {
    this.rawDataQueue = [];
    this.processedDataQueue = [];
    this.ontologyPopulator = ontologyPopulator;
    this.dbManager = dbManager;
  }

  enqueueRawData(dataPoint: SensorData) {
    this.rawDataQueue.push(dataPoint);
  }

  processData() {
    while (this.rawDataQueue.length > 0) {
      const dataPoint = this.rawDataQueue.shift();
      if (dataPoint) {
        const cleanedData = this.cleanData(dataPoint);
        const features = extractFeaturesFromData(cleanedData);
        const probabilities = classifyLowLevelActivity(features);
        const processedData: ProcessedData = {
          timestamp: dataPoint.timestamp,
          features,
          probabilities,
        };
        this.processedDataQueue.push(processedData);
        // Forward processed data to ontology and database services
        this.ontologyPopulator.addInstance(processedData);
        void this.dbManager.insertInstance(processedData);
      }
    }
  }

  cleanData(dataPoint: SensorData): SensorData {
    // Implement data cleaning logic if necessary
    return dataPoint;
  }
}

export { DataPreprocessor, ProcessedData };
