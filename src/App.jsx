import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Show from './components/show'
//import data from "./data.json";


export default function App() {
  return(
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Show/>} />
      </Routes>
      </BrowserRouter>
    </>
  )

}
