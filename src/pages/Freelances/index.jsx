//import du compisant react Card
import React from "react"
import Card from "../../components/Card"

//import du styled component
import { CardContainer, PageSubtitle, PageTitle } from "../../styles/pages/Freelances"

// definition d une liste de données de profils
const freelanceProfiles = [
    {
        name: "Jane Doe",
        jobTitle: "Devops",

    },
    {
        name: "John Doe",
        jobTitle: "Developpeur frontend",

    },
    {
        name: "Jeanne Biche",
        jobTitle: "Développeuse Fullstack",

    },
]

function Freelances() {
    return (<React.Fragment>
        <section>
            <h1>Freelances 🧑‍💻 🧑‍💻 🧑‍💻</h1>

            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            <CardContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}// definition des key pour les liste de données profiles, a chaque generation de l element courant profile
                        label={profile.jobTitle}
                        //le prop picture: est defini par defaut dans la fonction Card
                        title={profile.name}
                    />
                ))}
            </CardContainer>
        </section>
    </React.Fragment>
    )
}

export default Freelances