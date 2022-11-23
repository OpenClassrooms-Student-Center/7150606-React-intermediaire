
import styled from "styled-components"

const HomeLogo = styled.img`
  height: 70px;
`

const StyledHeader = styled.header`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav{
        display:flex;
        justify-content: space-evenly;
        ul {
            padding-left: 0;
            display: flex;
            list-style: none;
            justify-content: space-evenly;
            width: 50%;       
        }     
    }
`

export { StyledHeader, HomeLogo }

// exports default, dans le fichier import on declare une nouvelle variable ou on stocke les données exportée,
// et fonctionne qui si on exporte une seule variable
//sinon on exporte avec un objet exports plusieurs variables et le mots clé default ne peux pas fonctionner