import { createGlobalStyle } from "styled-components"
import img from "../../assets/fond.jpg"


const GlobalStyle = createGlobalStyle`
      * {
        box-sizing: border-box;
      }
     body {
        margin: 0;
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
       
       
      }
      main {
        background: url(${img}); 
        min-height: 100vh;
      
        width:100%;
        display: flex;
        flex-direction: column; 

    }
    h1 {
      font-size: 32px;
    }
      
   
`
//les string d interpolation dans le template css de styled component pour importé l url de l img

export default GlobalStyle