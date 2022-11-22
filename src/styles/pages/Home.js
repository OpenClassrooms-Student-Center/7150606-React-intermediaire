import styled from "styled-components"


const HomeContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

  
`
// affectation par destruction de la prop scaleAnim qui recupere le state parent HomeContainer mis a jour a jour avec l evenement onClick et
// setScaleAnim
// le transform de la transition css sur le hover revient a sont etat initial avec le state recuperé dans la prop, le, decleencheu hover et le declencheur onClick
// la transition css avec onClick ne revient pas a son etat initial car le setScale anim l 'incremente le scale de +0.5 et le state memorise le scale incrementé avec setScaleAnim
const Ballon = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: red;
   
    transition: transform 5s;
    &:hover {
        transform: scale(1.5)
    }
    transform: scale( ${({ scaleAnim }) => scaleAnim} )
   

`
export { HomeContainer, Ballon }