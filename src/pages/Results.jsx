import { useContext } from 'react'
import { SurveyContext } from '../utils/context/SurveyProvider'

function Results() {
  const { results } = useContext(SurveyContext)
  console.log(results)

  return (
    <div>
      <h1>Résultats</h1>
    </div>
  )
}

export default Results
