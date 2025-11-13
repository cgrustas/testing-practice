/**
 * Takes an array of numbers and returns an object with
 * the following properties: average, min, max, and length
 */
export function analyzeArray(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Invalid array!");
  }
  return {
    average: average(numbers),
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length: numbers.length,
  };
}

function average(numbers) {
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  return sum / numbers.length;
}
