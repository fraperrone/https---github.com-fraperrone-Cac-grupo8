import { Link } from "react-router-dom";


export default function PageNotFound(){
    return(
        <>
        <h1>Pagina no Encontrada</h1>
        <Link to="/">Volver al inicio</Link>
        </>
    )
}