import Card from "../../components/Card"
// import des images par defauts des profils
import DefaultPicture from '../../assets/profil.png'

// definition d une liste de données de profils

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
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
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
    )
}

export default Freelances