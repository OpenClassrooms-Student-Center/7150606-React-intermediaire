import { Link } from "react-router-dom";

function Header() {

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/"> Accueil</Link></li>
                    <li><Link to="/survey"> Questionnaire</Link></li>
                </ul>

            </nav>
        </div>
    )
}

export default Header