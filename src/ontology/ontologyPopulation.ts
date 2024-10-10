// src/ontology/ontologyPopulation.ts

import { OntologyManager } from './ontologyDefinition';
import { ProcessedData } from '../preprocessing/dataPreprocessing';

class OntologyPopulator {
  ontologyManager: OntologyManager;

  constructor() {
    this.ontologyManager = new OntologyManager();
    this.ontologyManager.defineClasses();
    this.ontologyManager.defineProperties();
  }

  addInstance(processedData: ProcessedData) {
    const { timestamp, probabilities } = processedData;
    // Create instances in the ontology
    // For example, create a LowLevelActivity instance
    const activityInstance = this.ontologyManager.ontology.createIndividual(`Activity_${timestamp}`, 'LowLevelActivity');
    activityInstance.addProperty('hasProbability', probabilities);
    // Set other properties as needed
    console.log(`Added instance to ontology: ${activityInstance}`);
  }

  saveOntology() {
    this.ontologyManager.saveOntology();
  }
}

export { OntologyPopulator };
