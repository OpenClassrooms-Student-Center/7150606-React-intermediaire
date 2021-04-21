import { getJobTitle } from './'

describe('The getJobTitle function', () => {
  test('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(getJobTitle('item2', 3, 1)).toEqual(expectedState)
  })
  test('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(getJobTitle('item3', 3, 2)).toEqual(expectedState)
  })
})
