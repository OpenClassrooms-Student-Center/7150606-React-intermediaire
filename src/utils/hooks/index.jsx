import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context'

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        if (response.status !== 'ok') {
          const { errorMessage } = await response.json()
          setError(errorMessage)
        }
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log('===== err =====', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { isLoading, data, error }
}

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}
