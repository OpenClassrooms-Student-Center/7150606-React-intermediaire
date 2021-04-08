import React, { useState, createContext } from 'react'

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
  const [results, setResults] = useState({})
  const saveResults = (newResults) => {
    setResults({ ...results, ...newResults })
  }

  return (
    <SurveyContext.Provider value={{ results, saveResults }}>
      {children}
    </SurveyContext.Provider>
  )
}
