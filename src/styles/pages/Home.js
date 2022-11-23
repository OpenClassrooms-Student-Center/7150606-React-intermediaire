import styled from "styled-components"
import { StyledLink } from "../../styles/components/atoms/Link.js"
import colors from "../utils/color.js"

const HomeWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center; 
    & > div {
      
      display: flex;
    }
`
const HomeContainer = styled.div`
  margin: 30px;

  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

const Illustration = styled.img`
  flex: 1;
`
// affectation par destruction de la prop scaleAnim qui recupere le state parent HomeContainer mis a jour a jour avec l evenement onClick et
// setScaleAnim
// le transform de la transition css sur le hover revient a sont etat initial avec le state recuperé dans la prop, le, decleencheu hover et le declencheur onClick
// la transition css avec onClick ne revient pas a son etat initial car le setScale anim l 'incremente le scale de +0.5 et le state memorise le scale incrementé avec setScaleAnim
const Ballon = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${colors.primary};
   
    transition: transform 5s;
    &:hover {
        transform: scale(1.5)
    }
    transform: scale( ${({ scaleAnim }) => scaleAnim} )
   

`
export { HomeWrapper, HomeContainer, LeftCol, StyledTitle, Illustration, Ballon }