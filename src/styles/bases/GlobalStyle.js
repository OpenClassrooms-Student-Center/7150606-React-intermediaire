import { createGlobalStyle } from "styled-components"
import img from "../../assets/fond.jpg"


const GlobalStyle = createGlobalStyle`
     body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
       
       
      }
      main {
        background: url(${img}); 
        min-height: 100vh;
      
        width:100%;
        display: flex;
        flex-direction: column;
       
        
       

    }
      div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
      
      
    }
   
`
//les string d interpolation dans le template css de styled component pour importé l url de l img

export default GlobalStyle