import illustration404 from "../../assets/404.svg"

//import styled components
import { ErrorWrapper, ErrorTitle, ErrorSubtitle, Illustration } from "../../styles/components/Error.js"

function Error() {
    return (
        <ErrorWrapper>
            <ErrorTitle>Oups...</ErrorTitle>
            <Illustration src={illustration404} />
            <ErrorSubtitle>
                Il semblerait que la page que vous cherchez n’existe pas
            </ErrorSubtitle>
        </ErrorWrapper>
    )
}

export default Error