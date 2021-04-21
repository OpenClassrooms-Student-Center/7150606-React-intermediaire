import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context'

export function useFetch(url) {
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    if (!url) return
    fetch(url)
      .then((response) => response.json())
      .then((jsonResponse) => setData(jsonResponse))
      .then(() => setLoading(false))
      .catch((err) => {
        if (err) {
          setError(err.toString())
        }
      })
  }, [url])
  return { isLoading, data, error }
}

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}
