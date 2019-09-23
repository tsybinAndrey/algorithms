/**
 * Binary Search
 * @param {number|string[]} list - sorted array of values
 * @param {number|string} searchFor - number you wanna search for
 * @returns {number} - index of found item in array or -1 if there is no item
 */
const binarySearch = function (list, searchFor) {
  let low = 0
  let high = list.length - 1

  while(low <= high) {
    const mid = Math.round((low + high) / 2)

    if (list[mid] === searchFor) return mid

    if (list[mid] > searchFor) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}

exports.binarySearch = binarySearch
