import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image"

import Button from 'react-bootstrap/Button';

export default function PageNotFound() {
    return (
        <>
            <div class="row justify-content-center">
                <div class="col-4">
                    <h3>Pagina No Encontrada 404 Not Found</h3>
                    <Image src="../logo192.png" fluid />
                </div>

            </div>


            {/* <Link to="/">Volver al inicio</Link> */}

            <Link to="/">
                <div class="d-grid gap-2">

                    <button class="btn btn-primary" type="button">Volver al Inicio</button>

                </div>
            </Link>

        </>
    )
}