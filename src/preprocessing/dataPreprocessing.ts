// src/preprocessing/dataPreprocessing.ts

import { SensorData } from '../sensors/sensorCollection';
import { extractFeaturesFromData } from './featureExtraction';
import { classifyLowLevelActivity } from '../classification/classifier';

interface ProcessedData {
  timestamp: number;
  features: any;
  probabilities: { [activity: string]: number };
}

class DataPreprocessor {
  rawDataQueue: SensorData[];
  processedDataQueue: ProcessedData[];

  constructor() {
    this.rawDataQueue = [];
    this.processedDataQueue = [];
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
        // TODO: Send processedData to ontology population module
        console.log(`Processed data: ${JSON.stringify(processedData)}`);
      }
    }
  }

  cleanData(dataPoint: SensorData): SensorData {
    // Implement data cleaning logic if necessary
    return dataPoint;
  }
}

export { DataPreprocessor, ProcessedData };
