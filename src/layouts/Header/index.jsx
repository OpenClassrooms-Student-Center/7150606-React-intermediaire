import { Link } from "react-router-dom"

function Header() {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/"> Accueil</Link></li>
                    <li><Link to="/survey"> Questionnaire</Link></li>
                    <li><Link to="/admin"> Admin</Link></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header