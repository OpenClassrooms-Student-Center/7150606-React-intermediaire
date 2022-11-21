import { useParams, Link } from "react-router-dom"

function Question() {
    const { questionNumber } = useParams()
    const questionList = [

        "1-quelle est votre deco préférée?",
        "2-quel est votre budget?",
        "3-Ou souhaitez vous habiter?",
        "4-Cherchez vous un appartemnt ou une maison?",
        "5-Quelles les commodités que vous privilégiez?"

    ]
    const questionNumberInt = parseInt(questionNumber);
    // la condition empeche d aller à zero, sera egale a 1 si c est sur un sion incremente
    const prev = questionNumberInt === 1 ? 1 : questionNumber - 1
    const next = questionNumberInt + 1
    return <aside>
        {/* -1 la valeur  du nombre de du parametre questionNumber  soit egale au numero d index du tableau qui demarre a 0 et  pas à 1*/}
        <h3> question{questionNumber}:</h3>
        <p>{questionList[questionNumber - 1]}</p>
        <Link to={`/survey/${prev}`}> Précédent</Link>
        {/* au lieu de mettre <= 10 , une page intercepte quand le nombre de question arrive a dix ce qui fait sortir de la page de questionnaire*/}
        {questionNumberInt === 10 ? <Link to="/results"> Results</Link> : <Link to={`/survey/${next}`}>Suivant</Link>}
        {/* les deux operateurs de comparaison de === 1 et === 10 permet d afficher les deux bouton en même temps  dans l interval des questions de  1 et 10*/}
    </aside>
}
export default Question

