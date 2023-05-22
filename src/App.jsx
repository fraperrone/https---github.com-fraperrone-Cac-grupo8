import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Show from './components/show'
import PageNotFound from "./components/PageNotFound";
//import data from "./data.json";
import {Create} from "./components/CreateEstudiante"

export default function App() {
  return(
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Show/>} />
      <Route path="*" element= {<PageNotFound/>} />

      <Route path="/create" element= {<Create/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )

}
