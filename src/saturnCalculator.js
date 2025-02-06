/**
 * Calculates a Saturn score by multiplying the input value by a constant factor
 * @param {number} value - The input value to calculate the score from
 * @returns {number} The calculated Saturn score
 */
function calculateSaturnScore(value) {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error('Input must be a valid number')
  }

  const SATURN_FACTOR = 42
  return value * SATURN_FACTOR
}

module.exports = { calculateSaturnScore };
