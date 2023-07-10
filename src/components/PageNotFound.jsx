import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image"
import { Container, Row, Col } from "react-bootstrap";


export default function PageNotFound() {
    return (
        <>



            {/* <Link to="/">Volver al inicio</Link> */}
            <Container className="mt-5">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <h3>PAGINA NO ENCONTRADA</h3>
                        <Image src="error404perro.png" fluid />
                    </div>
                </div>
                <Row className="justify-content-center">
                    <Col xs="3">
                        <Link to="/">
                            <div> {/*class="d-grid gap-2"*/}
                                <button class="btn btn-primary" type="button">VOLVER AL INICIO</button>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>

        </>
    )
}