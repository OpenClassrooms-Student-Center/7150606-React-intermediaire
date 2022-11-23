import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { SurveyContainer, QuestionTitle, QuestionContent, LinkWrapper } from "../../styles/pages/Survey"

function Survey() {

    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber);
    // la condition empeche d aller à zero, sera egale a 1 si c est sur un sion incremente
    const prev = questionNumberInt === 1 ? 1 : questionNumber - 1
    const next = questionNumberInt + 1

    const [surveyData, setSurveyData] = useState({})


    // Cette syntaxe permet aussi bien de faire des calls API.
    // Mais pour utiliser await dans une fonction, il faut que celle-ci soit async (pour asynchrone).
    // Comme la fonction passée à useEffect ne peut pas être asynchrone,
    // il faut utiliser une fonction qui est appelée dans useEffect et déclarée en dehors, comme ici 👇.
    // Essayez de commenter le code créé dans le chapitre et de décommenter fetchData pour voir.

    // async function fetchData() {
    //   try {
    //     const response = await fetch(`http://localhost:8000/survey`)
    //     const { surveyData } = await response.json()
    //     setSurveyData(surveyData)
    //   } catch (error) {
    // console.log('===== error =====', error)
    // setError(true)
    //   }
    // }

    useEffect(() => {
        fetch(`http://localhost:8000/survey`).then((response) =>
            response.json().then(({ surveyData }) => {
                console.log("data suveydata", surveyData)

            })
        )
    }, [])

    return <section>
        <h1> Questionnaire</h1>
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
            <LinkWrapper>
                <Link to={`/survey/${prev}`}>Précédent</Link>
                {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${next}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    </section>
}

export default Survey