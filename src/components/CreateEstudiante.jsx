import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"

import swal from 'sweetalert';

import { useForm} from "react-hook-form"


//Campos: -experiencia -linkedin -nombre -titulo

export const Create = () => {
    const [nombre, setNombre] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [experiencia, setExperiencia] = useState("")
    const [titulo, setTitulo] = useState("")

    const { handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;

    const navigate = useNavigate()

    const estudiantesCollection = collection(db, "estudiantes")

    const createEstudiante = async (e) => {
       

        //prueba try
        try {
            //throw("error catch ")

            await addDoc(estudiantesCollection, {
                nombre: nombre,
                linkedin: linkedin,
                experiencia: experiencia,
                titulo: titulo
            })
            swal("Carga Correcta", "La persona fue cargada de forma exitosa", "success");
            navigate("/")
        } catch (error) {
            alert("Erorr addDoc Estudiante: ", error)
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Crear Estudiante</h1>
                    <form onSubmit={handleSubmit(createEstudiante)}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="form-control"
                                type="text"
                                placeholder="Nombre"

                                required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Linkedin</label>
                            <input
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                                className="form-control"
                                type="url"
                                required
                                placeholder="https://www.linkedin.com/"

                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Experiencia</label>
                            <input
                                value={experiencia}
                                onChange={(e) => setExperiencia(e.target.value)}
                                className="form-control"
                                type="text"
                                placeholder="Experiencia"
                                required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Titulo</label>
                            <input
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                className="form-control"
                                type="text"
                                placeholder="Titulo"
                                required />
                        </div>
                        <button disabled={isSubmitting}  className="btn btn-primary">
                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Create Estudiante</button>
                        <Link to="/">
                            <button className="btn btn-danger">
                                CANCEL
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}