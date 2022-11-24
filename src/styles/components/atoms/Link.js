import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/color'


// creation d un styled composant avec un element qui n existe pas dans le DOM mais avec un element Link qui provient d une bibliotheque "react router dom"
//passé en parametre de styled
export const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    display: flex;
    justify-content: center;

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