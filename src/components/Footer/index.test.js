import Footer from './'
import { render, screen, fireEvent } from '@testing-library/react'
// import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '../../utils/context'

describe('Footer', () => {
  it('Renders without crashing', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
  })

  it('Change theme', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})
