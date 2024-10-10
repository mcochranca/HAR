// src/database/databaseManager.ts

import { createConnection, Connection, Repository, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ProcessedData } from '../preprocessing/dataPreprocessing';

@Entity()
class Instance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  timestamp: number;

  @Column()
  lowLevelActivity: string;

  @Column('float')
  probability: number;
}

@Entity()
class AxiomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lowLevelActivity: string;

  @Column()
  highLevelActivity: string;

  @Column('float')
  probability: number;
}

class DatabaseManager {
  connection: Connection;

  async initialize() {
    this.connection = await createConnection({
      type: 'sqlite',
      database: 'har_database.db',
      entities: [Instance, AxiomEntity],
      synchronize: true,
    });
  }

  async insertInstance(instanceData: ProcessedData) {
    const instanceRepo = this.connection.getRepository(Instance);
    // Assuming instanceData has the necessary fields
    const lowLevelActivity = Object.keys(instanceData.probabilities)[0]; // Simplified for example
    const probability = instanceData.probabilities[lowLevelActivity];

    const instance = instanceRepo.create({
      timestamp: instanceData.timestamp,
      lowLevelActivity,
      probability,
    });
    await instanceRepo.save(instance);
  }

  async insertAxiom(axiom: AxiomEntity) {
    const axiomRepo = this.connection.getRepository(AxiomEntity);
    await axiomRepo.save(axiom);
  }

  async close() {
    await this.connection.close();
  }
}

export { DatabaseManager, Instance, AxiomEntity };
