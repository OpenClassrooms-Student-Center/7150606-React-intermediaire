import { getJobTitle, getFetchParams } from './'

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

describe('The getFetchParams function', () => {
  test('should use the right format for param', () => {
    const expectedState = 'a1=answer1'
    expect(getFetchParams({ 1: 'answer1' })).toEqual(expectedState)
  })
  test('should concatenate params with an &', () => {
    const expectedState = 'a1=answer1&a2=answer2'
    expect(getFetchParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
      expectedState
    )
  })
})
