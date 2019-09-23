const {gcd} = require('../')


test('get reatest common divisor for 1680, 640', () => {
  expect(gcd(1680, 640)).toBe(80)
})

test('get reatest common divisor for 640, 1680', () => {
  expect(gcd(640, 1680)).toBe(80)
})

test('get reatest common divisor for 17, 10', () => {
  expect(gcd(17, 10)).toBe(1)
})

test('get reatest common divisor for 640, -1680', () => {
  expect(gcd(640, -1680)).toBe(80)
})


test('get reatest common divisor for 640.1, 1680.3', () => {
  expect(() => {
    gcd(640.1, 1680.3)
  }).toThrow()
})