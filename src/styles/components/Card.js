//import du styled de styled-components pour les composant style CSS in JS
import styled from "styled-components"
// import utils colors
import colors from "../utils/color.js"
//.........................................CREATION DES COMPOSANT STYLED..............................................................

//les composant styled sont ecrit en Pascale Case comme les composant react
const CardLabel = styled.span``
const CardImage = styled.img``
//imbrication de CardContainer avec ses éléments enfants , pseudo selecteurs nested
// ne pas imbriquer les style composant dans un autre si on doit utiliser les props de l enfant style composant
// car il fera reference au composant parent,le style ne sera pas appliqué a l enfant 
//dans ce cas on applique le style component hors du parent Card container ci dessus et on recupere la prop du styled component 
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  justify-content: space-around;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px ${colors.primary};
  }

  ${CardLabel}{
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
    align-self: start;
    
  }
  ${CardImage}{
    height: 150px;
    width: 150px;
   
    border-radius: 50%;
 
  }

  .card-title { 
    font-weight: bold;
    color: black;
    font-size: 22px;
    font-weight: normal;
    align-self: center;
    &:hover {
        color: #5843e4;

    }
  }

`

export { CardWrapper, CardImage, CardLabel }