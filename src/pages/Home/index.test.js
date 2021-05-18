import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Home from './'
import { ThemeProvider } from '../../utils/context'

describe('The Home component', () => {
  it('should display the link to the survey', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )

    // screen.getByText('Je ne sais plus')
    screen.debug()
    // screen.getByText(
    //   'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
    // )
    screen.getByRole('heading', {
      level: 2,
      text:
        'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents',
    })
  })
})
