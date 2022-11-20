import { useParams } from "react-router-dom"

function Question() {
    const { questionNumber } = useParams()
    const questionList = [

        "quel est votre deco préféré?",
        "quel est votre budget?",
        "Ou souhaitez vous habiter?"

    ]
    return <div>


        {/* -1 la valeur  du nombre de du parametre questionNumber  soit egale au numero d index du tableau qui demarre a 0 et  pas à 1*/}
        <h3> question{questionNumber}:</h3>
        <p>{questionList[questionNumber - 1]}</p>
    </div>
}
export default Question

