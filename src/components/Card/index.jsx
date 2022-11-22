// import de PROPTYPES pour les props Card 
import PropTypes from "prop-types"

//import du styled de styled-components pour les composant style CSS in JS
import styled from "styled-components"

// import des profils et de l image par defaut de picture
import defaultPictures from "../../assets/profil.png"

//.........................................CREATION DES COMPOSANT STYLED..............................................................

//les composant styled sont ecrit en Pascale Case comme les composant react
const CardLabel = styled.span``
const CardImage = styled.img``
//imbrication de CardContainer avec ses éléments enfants , pseudo selecteurs nested
const CardContainer = styled.div`
display: flex;
flex-direction: column;
padding: 15px;
  ${CardLabel}{
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
  }
  ${CardImage}{
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 2px solid #5843e4;
  }
  .card-title { 
    font-weight: bold;
    &:hover {
        color: #5843e4;

    }
  }

`
function Card({ label, title, picture }) {
    return (
        <CardContainer>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <span className="card-title">{title}</span>
        </CardContainer>
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