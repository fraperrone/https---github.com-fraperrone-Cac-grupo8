import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image"
import { Container, Row, Col } from "react-bootstrap";


export default function PageNotFound() {
    return (
        <>  
             
            <div className="row justify-content-center">
                <div className="col-2">
                    <h3>PAGINA NO ENCONTRADA</h3>
                    <Image src="error404perro.png" fluid />
                </div>
            </div>

            {/* <Link to="/">Volver al inicio</Link> */}    
            <Container>
            <Row className="justify-content-md-center">
            <Col xs lg="2">
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