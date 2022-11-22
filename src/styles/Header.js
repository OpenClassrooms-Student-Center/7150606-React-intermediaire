import { Link } from "react-router-dom"
import styled from "styled-components"

// creation d un styled composant avec un element qui n existe pas dans le DOM mais avec un element Link qui provient d une bibliotheque "react router dom"
//passé en parametre de styled
const StyledLink = styled(Link)`
   
`
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
        ${StyledLink} {
            padding: 10px;
            color: #8186a0;
            text-decoration: none;
            font-size: 18px;
            display: flex;
            
            ${(props) =>
        props.$isFullLink &&
        ` color: white;
                border-radius: 30px;
                background-color: #5843E4; `}

        }
    
    }
`

export { StyledHeader, StyledLink }