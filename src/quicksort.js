/**
 * 
 * @param {number} min - number
 * @param {number} max - number
 * @returns {number} random integer number beetween min and max
 */
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 
 * @param {number[]|string[]} array 
 * @returns sorted array
 */
function quicksort(array) {
  if(array.length < 2) return array

  const pivotIndex = getRandomArbitrary(0, array.length)

  const pivot = array[pivotIndex]
  const lowerThenPivot = array.filter((value) => (value <= pivot) && (value !== pivot))
  const higherThenPivot = array.filter((value) => (value > pivot) && (value !== pivot))

  return [...quicksort(lowerThenPivot), pivot, ...quicksort(higherThenPivot)]
}

exports.quicksort = quicksort
