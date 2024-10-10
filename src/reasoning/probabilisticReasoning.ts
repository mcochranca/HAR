// src/reasoning/probabilisticReasoning.ts

import { Axiom, loadAssertionAxioms } from './assertionAxioms';

class ProbabilisticReasoner {
  axioms: Axiom[];

  constructor() {
    this.axioms = loadAssertionAxioms();
  }

  inferHighLevelActivity(lowLevelProbabilities: { [activity: string]: number }): { [activity: string]: number } {
    const highLevelProbabilities: { [activity: string]: number } = {};

    for (const axiom of this.axioms) {
      const lowLevelProb = lowLevelProbabilities[axiom.lowLevelActivity] || 0;
      const combinedProb = lowLevelProb * axiom.probability;

      if (highLevelProbabilities[axiom.highLevelActivity]) {
        highLevelProbabilities[axiom.highLevelActivity] += combinedProb;
      } else {
        highLevelProbabilities[axiom.highLevelActivity] = combinedProb;
      }
    }

    // Normalize probabilities
    const totalProb = Object.values(highLevelProbabilities).reduce((sum, p) => sum + p, 0);
    for (const activity in highLevelProbabilities) {
      highLevelProbabilities[activity] /= totalProb || 1;
    }

    return highLevelProbabilities;
  }
}

export { ProbabilisticReasoner };
