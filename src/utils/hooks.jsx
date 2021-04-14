import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    if (!url) return
    fetch(url)
      .then((data) => data.json())
      .then(({ surveyData }) => setData(surveyData))
      .then(() => setLoading(false))
      .catch((err) => {
        if (err) {
          setError(err.toString())
        }
      })
  }, [url])
  return { isLoading, data, error }
}
