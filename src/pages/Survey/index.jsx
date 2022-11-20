import { Link, useRouteMatch } from "react-router-dom"

function Survey() {
    const { path } = useRouteMatch()



    return <div>


        <h1> Questionnaire</h1>
        <ul>
            <li><Link to={`${path}/1`}> Question1</Link></li>
            <li><Link to={`${path}/2`}> Question2</Link></li>
            <li><Link to={`${path}/3`}> Question3</Link></li>
        </ul>








    </div >
}

export default Survey