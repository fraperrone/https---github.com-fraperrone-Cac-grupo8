import "./App.css";
import React from "react";
import data from "./data.json";

export default function App() {
  return (
    <>
      <h1>Estudiantes</h1>
      <ul>
        {data.map((el,index) => {
          return (
            <li key={index}>{el.nombre}</li>
          )
        })}
      </ul>
    </>
  );
}
