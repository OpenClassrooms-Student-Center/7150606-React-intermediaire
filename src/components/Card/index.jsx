
// import de PROPTYPES pour les props Card 
import PropTypes from "prop-types"
//import du styled component
import { CardWrapper, CardImage, CardLabel } from "../../styles/components/Card.js"

// import des profils et de l image par defaut de picture
import defaultPictures from "../../assets/profil.png"


function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <span className="card-title">{title}</span>
        </CardWrapper>
    )
}

// definition des PropTypes dans l objet propTypes du composant Card

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

//definition d un prop title, label, par defaut, une image par defaut si l utilisateur n a pas defni de photo
Card.defaultProps = {
    title: '',
    label: '',
    picture: defaultPictures
}

export default Card