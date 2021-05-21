import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import { render } from '../../utils/test'
import Freelances from './'

const errorServer = setupServer(
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        errorMessage: `Oups il y a eu une erreur dans l'API`,
      })
    )
  })
)

beforeAll(() => errorServer.listen())
afterEach(() => errorServer.resetHandlers())
afterAll(() => errorServer.close())

test('Should display error', async () => {
  render(<Freelances />)

  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))

  screen.debug()
  expect(screen.getByTestId('error-message')).toMatchInlineSnapshot(`
    <span
      data-testid="error"
    >
      Oups il y a eu une erreur dans l'API
    </span>
  `)
})
