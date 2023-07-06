import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

// import { DeletePersona } from "./DeletePersona";

import { ClipLoader } from "react-spinners"


import { Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { deleteDoc, doc } from "firebase/firestore"

import swal from 'sweetalert';

export default function Show() {
  //1 configurar useState (hook)
  const [personas, setPersonas] = useState([]);
  //2 referenciamos a la db de firestore
  //const personasCollection= collection(db,"heroes")
  //const personasCollection = collection(db,"personas")
  // const personasCollection = collection(db, "cac_grupo8");

  //comentario de prueba

  //Buscador:
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = personas.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      console.log(filteredData)
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(personas)
    }
  }



  //


  //Conexion Franco
  const personasCollection = collection(db, "estudiantes");

  //3 funcion para mostrar todos los docs
  const getPersonas = async () => {
    try {
      const data = await getDocs(personasCollection);
      //console.log(data);
      setCargando(false)
      setPersonas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {

      //Error de Quota Exceeded
      //Metodo 1
      document.open()
      document.write(`<h2>${error}</h2>`)
      document.close()

    }
  };

  //eliminar persona:



  const DeletePersona = async (id) => {

    //Sweet alert
    swal({
      title: "Estas seguro?",
      text: "Una vez eliminado, no podrá recuperarse",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Tarjeta CV, Eliminada", {
            icon: "success",
          });
          ConfirmarDeletePersona(id)

        } else {
          swal("Operacion Cancelada");
        }
      });

    //alert Default
    // if (window.confirm("Delete?")) {
    //     const estudiantesDoc = doc(db, "estudiantes", id)
    //     await deleteDoc(estudiantesDoc)
    //     // window.location.reload(false);
    //     alert("Elemento borrado")
    //     // Navigate("/")
    //     //window.location.reload(false);
    // }else{
    //     alert("Operacion cancelada")
    //     // Navigate("/")   
    // }

  }

  const ConfirmarDeletePersona = async (id) => {

    const estudiantesDoc = doc(db, "estudiantes", id)
    await deleteDoc(estudiantesDoc)
    // window.location.reload(false);
    //alert("Elemento borrado")
    // Navigate("/")
    //window.location.reload(false);
    // useEffect( ()=>{

    //  Show()},[])
    getPersonas()


  }

  const [cargando, setCargando] = useState([true])

  //6 use Effect
  useEffect(() => {
    getPersonas();

    //bandera useEffect ( para verificar que no quede en bucle infinito)

    console.log("use Effect ejecutado")

  }, []);

  if (cargando) {
    return (
      <div className=" d-flex align-items-center justify-content-center" >
        <ClipLoader color="#36d7b7" size={200} />
      </div>
    )
  }

  return (
    <>
      <div>
        <h1> Comisión 23808 - Grupo N°8</h1>
      </div>
      <div>
        <h2> Perfiles de Estudiantes</h2>
      </div>

      <Container>
        <Row className="justify-content-md-center">
          <Col className="ml-5 pl-5">
            {/* <Search></Search> */}
            <Input icon='search'
              placeholder='Search...'
              onChange={(e) => searchItems(e.target.value)}
              className="pl-5"
            />
          </Col>
          <Col >
            <div >{/*className="d-grid gap-2"*/}
              <Link to="/create" className="btn btn-primary mt-2 mb-2">CREAR</Link>
            </div>
          </Col>


        </Row>

        <ul>
          {searchInput.length > 1 ? (
            filteredResults.map((el, index) => {
              return (
                //<li key={index}>{el.nombre} ({el.edad}) (ID:{el.id})</li>
                <li>
                  <Card>
                    <Card.Header>{el.nombre}</Card.Header>
                    <Card.Body>
                      <Card.Title>Titulo alcanzado: {el.titulo} </Card.Title>
                      <Card.Text>{el.experiencia}</Card.Text>
                      <a href={el.linkedin} target="_blank" rel="noreferrer">
                        <Button variant="primary">Go Linkedin!</Button>
                      </a>

                    </Card.Body>
                    <Card.Footer>
                      <button className="btn btn-danger" onClick={() => DeletePersona(el.id)}  ><i className="fa-solid fa-trash"></i></button>
                      <Link to={`/edit/${el.id}`} className="btn btn-dark"><i className="fa-sharp fa-solid fa-pencil"></i></Link>
                    </Card.Footer>
                  </Card>
                </li>
              );
            })
          ) : (
            personas.map((el, index) => {
              return (
                //<li key={index}>{el.nombre} ({el.edad}) (ID:{el.id})</li>
                <li key={index}>
                  <Card>
                    <Card.Header>{el.nombre}</Card.Header>
                    <Card.Body>
                      <Card.Title>Titulo alcanzado: {el.titulo} </Card.Title>
                      <Card.Text>{el.experiencia}</Card.Text>
                      <a href={el.linkedin} target="_blank" rel="noreferrer">
                        <Button variant="primary">Go Linkedin!</Button>
                      </a>

                    </Card.Body>
                    <Card.Footer>
                      <button className="btn btn-danger" onClick={() => DeletePersona(el.id)}  ><i className="fa-solid fa-trash"></i></button>
                      <Link to={`/edit/${el.id}`} className="btn btn-success"><i className="fa-sharp fa-solid fa-pencil"></i></Link>
                    </Card.Footer>
                  </Card>
                </li>
              );
            })
          )}
        </ul>



      </Container>
    </>
  );
}
