//import du styled component
import { StyledHeader, StyledLink } from "../../styles/layouts/Header.js"

function Header() {

    return (
        <StyledHeader>
            <nav className="nav-bar">
                <ul>
                    <li><StyledLink to="/admin"> Admin</StyledLink></li>
                    <li><StyledLink to="/"> Accueil</StyledLink></li>
                    <li><StyledLink to="/freelances"> Profils</StyledLink></li>
                    {/* ajput d une prop isFullLink pour le style*/}
                    <li><StyledLink to="/survey" $isFullLink > Questionnaire</StyledLink></li>

                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header