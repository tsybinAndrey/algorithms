const {binarySearch} = require('../')

test('get position of 3 in array [1, 3, 5, 7]', () => {
  expect(binarySearch([1, 3, 5, 7], 3)).toBe(1)
})

test('get position of 10 in array [1, 3, 5, 7]', () => {
  expect(binarySearch([1, 3, 5, 7], 10)).toBe(-1)
})

test('get position of "c" in array ["a", "b", "c", "d"]', () => {
  expect(binarySearch(['a', 'b', 'c', 'd'], 'c')).toBe(2)
})

test('get position of e in array ["a", "b", "c", "d"]', () => {
  expect(binarySearch(['a', 'b', 'c', 'd'], 'e')).toBe(-1)
})