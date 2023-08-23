import {PropTypes } from "prop-types"

export const FirstApp = ({name ,tittle , age}) => {
    return (
        <div>
            <h1>{tittle}</h1>
            <h1>Hola {name}</h1>
            <p>La edad de este sujeto es de {age} años</p>
        </div>
    )
}

FirstApp.propTypes = {
    name: PropTypes.string.isRequired,
    tittle: PropTypes.string,
    age: PropTypes.number.isRequired
}