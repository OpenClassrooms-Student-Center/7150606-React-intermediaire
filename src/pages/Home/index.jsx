import { useState } from "react"
import { HomeContainer, Ballon } from "../../styles/Home.js"

function Home() {
    const [scaleAnim, setScaleAnim] = useState(0.5)

    return (<HomeContainer>
        <h1 onClick={() => setScaleAnim(scaleAnim + 0.5)}>
            Page d'accueil
            <Ballon scaleAnim={scaleAnim} />{/* recuperation du state parent dans les prop du style component Ballon*/}
        </h1>

    </HomeContainer>)
}

export default Home
