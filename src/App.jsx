import "./App.css";
import React from "react";
import data from "./data.json";
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
     <Link to="/">
      <h1>Estudiantes</h1>
      </Link>
      <ul>
        {data.map((el,index) => {
          return (
            <Link to={`estudiante/${el.id}`}>
            <li key={index}>{el.nombre}</li>
            </Link>
          )
        })}
      </ul>

      <Routes>
        <Route path="/" element={<p>Selecciona un estudiante</p>}></Route>
        <Route path="/estudiante/:id" element={<MostrarEstudiante></MostrarEstudiante>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


function MostrarEstudiante(){
  
  let {id}=useParams()

  return(
    
    <>
      <h2>{data[id].nombre}</h2>
      <p>{data[id].experiencia}</p>
    </>
  )
}