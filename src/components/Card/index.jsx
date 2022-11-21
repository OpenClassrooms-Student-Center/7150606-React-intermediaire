// import de PROPTYPES pour les props Card 
import PropTypes from "prop-types"

//import du styled de styled-components pour les composant style CSS in JS
import styled from "styled-components"

// import des profils et de l image par defaut de picture
import defaultPictures from "../../assets/profil.png"

//.........................................CREATION DES COMPOSANT STYLED..............................................................
//les composant styled sont ecrit en Pascale Case comme les composant react
const CardLabel = styled.span`
color: #5843e4;
font-size: 22px;
font-weight: bold;
`
const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`

function Card({ label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <span>{title}</span>
        </div>
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