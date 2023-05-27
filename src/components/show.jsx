import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"

import { DeletePersona } from "./DeletePersona";

import { ClipLoader } from "react-spinners"

export default function Show() {
  //1 configurar useState (hook)
  const [personas, setPersonas] = useState([]);
  //2 referenciamos a la db de firestore
  //const personasCollection= collection(db,"heroes")
  //const personasCollection = collection(db,"personas")
  // const personasCollection = collection(db, "cac_grupo8");

  //Conexion Franco
  const personasCollection = collection(db, "estudiantes");

  //3 funcion para mostrar todos los docs
  const getPersonas = async () => {
    try{
    const data = await getDocs(personasCollection);
    //console.log(data);
    setCargando(false)
    setPersonas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }catch(error){

      //Error de Quota Exceeded
      //Metodo 1
      document.open()
      document.write(`<h2>${error}</h2>`)
      document.close()
     
    }
  };

  //eliminar persona:

  const [cargando, setCargando] = useState([true])

  //6 use Effect
  useEffect(() => {
    getPersonas();


  },[()=>{
    DeletePersona()}]);

  if (cargando) {
    return (
      <div className=" d-flex align-items-center justify-content-center" >
        <ClipLoader color="#36d7b7" size={200} />
      </div>
    )
  }

  return (
    <>

      <h1>Estudiantes - Comision 23808 Grupo 8</h1>
      <div className="d-grid gap-2">
        <Link to="/create" className="btn btn-secondary mt-2 mb-2">CREAR</Link>
      </div>

      <ul>
        {personas.map((el, index) => {
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
        })}
      </ul>
    </>
  );
}
