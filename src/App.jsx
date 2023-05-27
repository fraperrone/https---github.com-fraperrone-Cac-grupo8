import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Show from './components/Show'
import PageNotFound from "./components/PageNotFound";
//import data from "./data.json";
import { Create } from "./components/CreateEstudiante"
import { EditarPersona } from "./components/EditarEstudiante";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<EditarPersona />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}
