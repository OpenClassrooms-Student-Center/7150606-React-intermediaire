
import Card from "../../components/Card"
// import des images par defauts des profils


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
    return (
        <div>
            <h1>Freelances 🧑‍💻 🧑‍💻 🧑‍💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}// definition des key pour les liste de données profiles, a chaque generation de l element courant profile
                    label={profile.jobTitle}
                    //le prop picture: est defini par defaut dans la fonction Card
                    title={profile.name}
                />
            ))}
        </div>
    )
}

export default Freelances