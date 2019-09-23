/**
 * Greatest common divisor
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} greatest common divisor for 'a' and 'b'
 */
const gcd = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('params is not integer values')
  }

  if (b === 0) return a

  return gcd(b, a % b)
}

exports.gcd = gcd
