import { Component } from 'react'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profileData: {},
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params

    fetch(`http://localhost:8000/profile?id=${id}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({ profileData: jsonResponse?.profileData })
      })
  }

  render() {
    const { profileData } = this.state
    const { picture, name, description, location, tjm } = profileData
    return (
      <div>
        <img src={picture} alt={name} />
        <h1>{name}</h1>
        <span>{location}</span>
        <span>{tjm} € / jour</span>
        <p>{description}</p>
      </div>
    )
  }
}

export default Profile
