import "./App.css";
import React from "react";
//import data from "./data.json";

import{useState,useEffect} from "react"
import{collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "./firebaseConfig/firebase"

export default function App() {

  //1 configurar useState (hook)
  const [personas,setPersonas] = useState([])
  //2 referenciamos a la db de firestore
  //const personasCollection= collection(db,"heroes")
  //const personasCollection = collection(db,"personas")
  const personasCollection = collection(db,"cac_grupo8")
  
  //3 funcion para mostrar todos los docs
  const getPersonas = async() =>{
    const data = await getDocs(personasCollection)
    console.log(data);
    setPersonas(
      data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    )
  }

  //6 use Effect
  useEffect(()=>{
    getPersonas()
  },[])

  return (
    <>
      <h1>Estudiantes</h1>
      <ul>
        {personas.map((el,index) => {
          return (
            <li key={index}>{el.nombre} ({el.edad}) (ID:{el.id})</li>
          )
        })}
      </ul>
    </>
  );
}
