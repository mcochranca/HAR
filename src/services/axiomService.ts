import { Axiom } from '../reasoning/assertionAxioms';

const storedAxioms: Axiom[] = [];

export function saveAxiom(axiom: Axiom) {
  storedAxioms.push(axiom);
  // In a real app, replace this with API or database interaction
  console.log('Axiom saved:', axiom);
}

export function getAxioms(): Axiom[] {
  return [...storedAxioms];
}
