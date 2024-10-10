const axioms = {
  sitting: { probability: 0.7, highLevelActivity: 'working' },
  standing: { probability: 0.6, highLevelActivity: 'preparing' },
  walking: { probability: 0.8, highLevelActivity: 'exercising' },
};

export const inferHighLevelActivity = (processedData: { [key: string]: number }): { activity: string, probability: number } => {
  // Simulate probabilistic reasoning
  const activities = Object.keys(axioms);
  const randomActivity = activities[Math.floor(Math.random() * activities.length)];
  const inferredActivity = axioms[randomActivity as keyof typeof axioms].highLevelActivity;
  const probability = axioms[randomActivity as keyof typeof axioms].probability;

  return { activity: inferredActivity, probability };
};