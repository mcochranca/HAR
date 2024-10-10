export const processData = (rawData: number): { [key: string]: number } => {
  // Simulate data processing and feature extraction
  const processedData = {
    mean: rawData,
    variance: Math.random() * 2,
    // Add more features as needed
  };
  return processedData;
};