import { Link } from "react-router-dom"
import styled from "styled-components"

// creation d un styled composant avec un element qui n existe pas dans le DOM mais avec un element Link qui provient d une bibliotheque "react router dom"
//passé en parametre de styled
const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
`

function Header() {

    return (
        <header>
            <nav>
                <ul>
                    <li><StyledLink to="/admin"> Admin</StyledLink></li>
                    <li><StyledLink to="/"> Accueil</StyledLink></li>
                    <li><StyledLink to="/survey"> Questionnaire</StyledLink></li>
                    <li><StyledLink to="/freelances"> Profils</StyledLink></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header