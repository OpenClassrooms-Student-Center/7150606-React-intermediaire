import { useState } from "react"

import HomeIllustration from '../../assets/home-illustration.svg'
//import du styled component
import { HomeWrapper, HomeContainer, LeftCol, StyledTitle, Illustration, Ballon } from "../../styles/pages/Home.js"
import { StyledLink } from "../../styles/components/atoms/Link.js"

function Home() {
    const [scaleAnim, setScaleAnim] = useState(0.5)// etat initia du scale

    return (
        <HomeWrapper>
            <div>
                <h1 onClick={() => setScaleAnim(scaleAnim + 0.5)}>{/* incremente le scale de +0.5 et le memorise dans le state donc la transition ne revient pa à son etat initial*/}
                    Page d'accueil

                </h1>
                <Ballon scaleAnim={scaleAnim} />{/* recuperation du state parent dans les prop du style component Ballon*/}
            </div>
            <HomeContainer>
                <LeftCol>
                    <StyledTitle>
                        Repérez vos besoins, on s’occupe du reste, avec les meilleurs
                        talents
                    </StyledTitle>
                    <StyledLink to="/survey/1" $isFullLink>
                        Faire le test
                    </StyledLink>
                </LeftCol>
                <Illustration src={HomeIllustration} />

            </HomeContainer>
        </HomeWrapper>)
}

export default Home
