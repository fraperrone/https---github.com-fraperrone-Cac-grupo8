import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"

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
    const data = await getDocs(personasCollection);
    //console.log(data);
    setPersonas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //6 use Effect
  useEffect(() => {
    getPersonas();
  }, []);

  return (
    <>
      <h1>Estudiantes - Comision 23808 Grupo 8</h1>
      <div className="d-grid gap-2">
        <Link to ="/create" className="btn btn-secondary mt-2 mb-2">CREAR</Link>
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
                  <a href={el.linkedin} target="_blank">
                    <Button variant="primary">Go Linkedin!</Button>
                  </a>
                </Card.Body>
              </Card>
            </li>
          );
        })}
      </ul>
    </>
  );
}
