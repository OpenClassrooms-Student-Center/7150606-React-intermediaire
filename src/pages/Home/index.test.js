import Home from './'
import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'
import { MemoryRouter } from 'react-router-dom'

// Veuillez utiliser cette fonction render
function render(ui) {
  rtlRender(ui, {
    wrapper: (
      <MemoryRouter>
        <ThemeProvider>{ui}</ThemeProvider>
      </MemoryRouter>
    ),
  })
}
