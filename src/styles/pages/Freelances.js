import styled from "styled-components"
import colors from "../utils/color.js"

const CardContainer = styled.div`
display: grid;
gap: 24px;
grid-template-rows: 350px 350px;
grid-template-columns: repeat(2, 1fr);
align-items: center;
justify-items: center;

 
`
const PageTitle = styled.h2`
font-size: 30px;
color: black;
text-align: center;
padding-bottom: 30px;
`

const PageSubtitle = styled.h3`
font-size: 20px;
color: ${colors.secondary};
font-weight: 300;
text-align: center;
padding-bottom: 30px;
`



export { CardContainer, PageTitle, PageSubtitle }