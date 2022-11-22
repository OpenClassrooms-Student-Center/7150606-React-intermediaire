//import du styled de styled-components pour les composant style CSS in JS
import styled from "styled-components"

//.........................................CREATION DES COMPOSANT STYLED..............................................................

//les composant styled sont ecrit en Pascale Case comme les composant react
const CardLabel = styled.span``
const CardImage = styled.img``
//imbrication de CardContainer avec ses éléments enfants , pseudo selecteurs nested
const CardContainer = styled.div`
display: flex;
flex-direction: column;
padding: 15px;
  ${CardLabel}{
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
  }
  ${CardImage}{
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 2px solid #5843e4;
  }
  .card-title { 
    font-weight: bold;
    &:hover {
        color: #5843e4;

    }
  }

`

export { CardContainer, CardImage, CardLabel }