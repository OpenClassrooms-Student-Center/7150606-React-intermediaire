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
  // On précise ici l'url qu'il faudra "intercepter"
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)

// Active la simulation d'API avant les tests
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())

test('Should display freelancers names', async () => {
  render(<Freelances />)

  screen.getByTestId('loader')
  await waitFor(() => {
    screen.getByText('Harry Potter')
    screen.getByText('Hermione Granger')
  })
})

// 1- On veut vérifier que le loader s'affiche bien pendant le call
// 2- Qu'on a autant de cards que de freelances dans la liste
// 3- Que notre première card affiche bien les éléments récupérés dans le call avec le premier élément
// 4- Vérifier erreurs
