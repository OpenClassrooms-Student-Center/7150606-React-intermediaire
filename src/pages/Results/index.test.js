import Results, { formatQueryParams, formatJobList } from './'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test'

describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('The formatQueryParams function', () => {
  it('should use the right format for param', () => {
    const expectedState = 'a1=answer1'
    expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
  })
  it('should concatenate params with an &', () => {
    const expectedState = 'a1=answer1&a2=answer2'
    expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
      expectedState
    )
  })
})

const resultsMockedData = [
  {
    title: 'seo',
    description: `Le SEO est en charge du référencement web d'une page`,
  },
  {
    title: 'frontend',
    description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
  },
]

const server = setupServer(
  rest.get('http://localhost:8000/results', (req, res, ctx) => {
    return res(ctx.json({ resultsData: resultsMockedData }))
  })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('The Results component', () => {
  it('should display the results after the data is loaded', async () => {
    render(<Results />)
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    const jobTitleElements = screen.getAllByTestId('job-title')
    expect(jobTitleElements[0].textContent).toBe('seo')
    expect(jobTitleElements.length).toBe(2)
    const jobDescriptionElements = screen.getAllByTestId('job-description')
    expect(jobDescriptionElements[1].textContent).toBe(
      resultsMockedData[1].description
    )
    expect(jobDescriptionElements.length).toBe(2)
  })
})
