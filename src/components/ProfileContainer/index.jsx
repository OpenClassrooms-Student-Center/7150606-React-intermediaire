import { useParams } from 'react-router-dom'
import Profile from '../../pages/Profile'

function ProfileContainer() {
  const { id } = useParams()
  return <Profile id={id} />
}

export default ProfileContainer
