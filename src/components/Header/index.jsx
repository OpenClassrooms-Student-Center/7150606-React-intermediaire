import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const HomeLogo = styled.img`
  height: 40px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src="https://raw.githubusercontent.com/atoulmet/assets/master/shiny.svg" />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
