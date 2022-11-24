import colors from './color'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const opacity = keyframes`
    from {
       opacity: 0.4;
       
    }
 
    to {
   opacity:1;
   
    }
`

const rotateSpinner = keyframes`
    from {
        transform: rotate(0deg);
        opacity: 0;
       
    }
 
    to {
        transform: rotate(45deg);
    opacity: 1;
    
  
    }
`


export const Spinner = styled.div`  
`


export const Loader = styled.div`

    
    padding: 15px;
  
    animation: ${opacity} 4000ms -2000ms infinite linear;
    position: relative;
   
    height:0px;
    width: 0px;
   ${Spinner} {
 
        position: absolute;
        
        animation: ${rotateSpinner} 1000ms infinite ease-out;
     
        border-radius: 50%;
        top: 0;
        left:0;
        right:0;
        bottom:0;

        
        &.spinner1 {
            border: 6px solid #8932BA ;
            border-top-color ${colors.primary};
           
           
        }

        &.spinner2 {
           
            border-right: 6px solid ${colors.primary};  
          
            animation-delay: 250ms;
            
        }

        &.spinner3 {
            border-bottom: 6px solid ${colors.primary};  
        
            animation-delay: 500ms;
         
        }

        &.spinner4 {
            border-left: 6px solid ${colors.primary};  
     
            animation-delay: 750ms;
           
        }
    }
       

`
