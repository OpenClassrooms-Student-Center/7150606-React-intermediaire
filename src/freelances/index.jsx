import Card from './Card'

const freelanceProfiles = [
  {
    name: 'Cersei Lannister',
    jobTitle: 'Devops',
    picture:
      'https://github.com/atoulmet/assets/blob/master/profile-user.png?raw=true',
  },
  {
    name: 'Jon Snow',
    jobTitle: 'Developpeur frontend',
    picture:
      'https://github.com/atoulmet/assets/blob/master/profile-user.png?raw=true',
  },
  {
    name: 'Dany Targaryen',
    jobTitle: 'Développeuse Fullstack',
    picture:
      'https://github.com/atoulmet/assets/blob/master/profile-user.png?raw=true',
  },
]

function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  )
}

export default Freelances
