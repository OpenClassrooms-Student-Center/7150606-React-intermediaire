import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { SurveyContainer, QuestionTitle, QuestionContent, LinkWrapper } from "../../styles/pages/Survey"
import { Loader, Spinner } from "../../styles/utils/Loader"


function Survey() {

    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber);
    // la condition empeche d aller à zero, sera egale a 1 si c est sur un sion incremente
    const prev = questionNumberInt === 1 ? 1 : questionNumber - 1
    const next = questionNumberInt + 1

    const [surveyData, setSurveyData] = useState({})
    const [isLoading, setIsLoading] = useState(false)// par defaut on met le state is loading a false 


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


    // apres le premier render (uniquement) du composant dont le state est vide,
    //useEffet execute la requête avec fetch qui met a jour le state avec les données requêté sur l api,
    //le composant est re-render avce le state mis a jour mais useEffect n execute plus la requete apres,
    // malgré le re-render de mise a jour du state grace  au tableau vide
    useEffect(() => {
        // delimite le debut du chargement des donnés ce qui evite les moment de blanc qui affichera a la place un loader dans le render du composant
        // avant la mise a jour du state avec les données de l api
        setIsLoading(true)
        fetch(`http://localhost:8000/survey`)
            .then((response) => response.json())
            .then(({ surveyData }) => { // on recupere l 'objet nommé surveyData dans l objet de la reponse
                console.log("data surveydata", surveyData)
                setSurveyData(surveyData)
                setIsLoading(false)

            })
            .catch((error) => console.log("erreur requete", error))

    }, [])

    return <section>
        <h1> Questionnaire</h1>
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {/* INTEGRATION DU LOADER AVANT LE CHARGEMENT DU CONTENU DE LA QUESTION DE PUIS FETCH AVEC USEEFFECT()*/}
            {/* condition d affichage du loader tant que les données ne sont pas mise a jour avec fetch qui recupere les données 
            et then qui  envoit  la promesse dans la mise a jour du state*/}

            {isLoading ?
                <Loader>
                    <Spinner className="spinner1" />
                    <Spinner className="spinner2" />
                    <Spinner className="spinner3" />
                    <Spinner className="spinner4" />
                </Loader> :
                <QuestionContent>{surveyData[questionNumber]}</QuestionContent>}

            <LinkWrapper>
                <Link to={`/survey/${prev}`}>Précédent</Link>
                {/*on verifie si la question suivante contient une valeur, si ce n est pas le cas on redirige vers la page resultat*/}
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