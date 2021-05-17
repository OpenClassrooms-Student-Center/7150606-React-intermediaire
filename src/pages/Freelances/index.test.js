import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitFor, screen } from '@testing-library/react'
import { render } from '../../utils/test'
import Freelances from './'

const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

const server = setupServer(
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('Should display freelancers names', async () => {
  render(<Freelances />)

  screen.getByTestId('loader')
  await waitFor(() => {
    screen.getByText('Harry Potter')
    screen.getByText('Hermione Granger')
  })
})
