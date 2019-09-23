/**
 * Greatest common divisor
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} greatest common divisor for 'a' and 'b'
 */
const gcd = function(a, b) {
  if (b === 0) return a

  return gcd(b, a % b)
}

exports.gcd = gcd
