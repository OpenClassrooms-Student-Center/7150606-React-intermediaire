// import de PROPTYPES pour les props Card 
import PropTypes from "prop-types"

function Card({ label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={100} width={100} />
            <span>{title}</span>
        </div>
    )
}

// definition des PropTypes dans l objet propTypes du composant Card

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string
}

//definition d un prop title par defaut
Card.defaultProps = {
    title: 'Mon titre par défaut',
}

export default Card