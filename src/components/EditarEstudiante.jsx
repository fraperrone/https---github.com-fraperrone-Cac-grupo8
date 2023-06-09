import { useState, useEffect } from "react";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

//Import sweetAlert:
import swal from "sweetalert";

export function EditarPersona() {
  // Variables
  const [nombre, setNombre] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [experiencia, setExperiencia] = useState("")
  const [titulo, setTitulo] = useState("")

  //uso parametro nnavegador: 
  const { id } = useParams()

  //objeto rutas:
  const navigate = useNavigate()

  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState

  const getPersona = async (id) => {
    const estudiantesDoc = await getDoc(doc(db, "estudiantes", id))
    if (estudiantesDoc.exists()) {
      setNombre(estudiantesDoc.data().nombre);
      setLinkedin(estudiantesDoc.data().linkedin);
      setExperiencia(estudiantesDoc.data().experiencia);
      setTitulo(estudiantesDoc.data().titulo);

    } else {
      alert("No existe");
    }
  }

  const update = async (e) => {
    // e.preventDefault();
    try {
      //throw("super error");
      const estudiantesDoc = doc(db, "estudiantes", id);
      const data = {
        nombre: nombre,
        linkedin: linkedin,
        experiencia: experiencia,
        titulo: titulo
      };
      await updateDoc(estudiantesDoc, data);
      swal("Modificacion Correcta", "La persona fue modificada correctamente", "success");
      navigate("/");
    } catch (e) {
      swal("Carga Incorrecta", `${e}`, "error");
    }

  };

  useEffect(() => {
    getPersona(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>EDITAR PERFIL</h1>
          <form onSubmit={handleSubmit(update)}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Linkedin</label>
              <input
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className="form-control"
                type="url"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Experiencia</label>
              <input
                value={experiencia}
                onChange={(e) => setExperiencia(e.target.value)}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Titulo</label>
              <input
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="form-control"
                type="text"
              />
            </div>
            {/* <div>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Cargar Documento</Form.Label>
                  <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Aceptar términos y condiciones" />
              </Form.Group>
            </div> */}

            <button disabled={isSubmitting} className="btn btn-primary">
            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
              EDITAR
            </button>
            <Link to="/">
              <button className="btn btn-danger">
                CANCELAR
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}