import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../utils/color.js"

// creation d un styled composant avec un element qui n existe pas dans le DOM mais avec un element Link qui provient d une bibliotheque "react router dom"
//passé en parametre de styled
const StyledLink = styled(Link)`
    padding: 10px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    display: flex;

    ${({ $isFullLink }) =>
        $isFullLink &&
        `color: white;
        border-radius: 30px;
        background-color: ${colors.primary}; `}
    `

// recuperation de la prop sans destructuration
/*${(props) =>
props.$isFullLink &&
`color: white;
border-radius: 30px;
background-color: ${colors.primary}; `}
`*/

const StyledHeader = styled.header`
    display:flex;

    nav{
        display:flex;
        justify-content: space-evenly;
        width:100%;
        ul {
            padding-left: 0;
            display: flex;
            list-style: none;
            justify-content: space-evenly;
            width: 50%;
        
        }
      
    }
`

export { StyledHeader, StyledLink }

// exports default, dans le fichier import on declare une nouvelle variable ou on stocke les données exportée,
// et fonctionne qui si on exporte une seule variable
//sinon on exporte avec un objet exports plusieurs variables et le mots clé default ne peux pas fonctionner