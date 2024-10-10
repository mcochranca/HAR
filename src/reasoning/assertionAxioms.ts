// src/reasoning/assertionAxioms.ts

interface Axiom {
    lowLevelActivity: string;
    highLevelActivity: string;
    probability: number;
  }
  
  function loadAssertionAxioms(): Axiom[] {
    // Load or define assertion axioms
    const axioms: Axiom[] = [
      {
        lowLevelActivity: 'sitting',
        highLevelActivity: 'working',
        probability: 0.7,
      },
      {
        lowLevelActivity: 'walking',
        highLevelActivity: 'exercising',
        probability: 0.8,
      },
      // Add more axioms as needed
    ];
    return axioms;
  }
  
  export { Axiom, loadAssertionAxioms };
  