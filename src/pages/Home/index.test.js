import { sum } from './'

test('Ma fonction sum', () => {
  const result = sum(40, 2)
  expect(result).toBe(42)
})
