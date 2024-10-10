// src/sensors/sensorCollection.ts

import { SENSOR_IDS, SAMPLING_RATE } from '../config/config';

interface SensorData {
  sensorId: number;
  data: number;
  timestamp: number;
}

class Sensor {
  sensorId: number;

  constructor(sensorId: number) {
    this.sensorId = sensorId;
  }

  readData(): SensorData {
    // Simulate reading data from a sensor
    const data = Math.random(); // Replace with actual sensor interfacing code
    const timestamp = Date.now();
    return {
      sensorId: this.sensorId,
      data,
      timestamp,
    };
  }
}

class SensorManager {
  sensors: Sensor[];
  running: boolean;

  constructor(sensorIds: number[]) {
    this.sensors = sensorIds.map((id) => new Sensor(id));
    this.running = false;
  }

  startCollection() {
    this.running = true;
    this.collectData();
  }

  stopCollection() {
    this.running = false;
  }

  async collectData() {
    while (this.running) {
      for (const sensor of this.sensors) {
        const dataPoint = sensor.readData();
        // TODO: Send dataPoint to the data preprocessing module
        console.log(`Collected data: ${JSON.stringify(dataPoint)}`);
      }
      await this.sleep(SAMPLING_RATE * 1000);
    }
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export { SensorManager, SensorData };
