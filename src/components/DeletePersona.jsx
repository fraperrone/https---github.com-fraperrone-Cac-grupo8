
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"





export const DeletePersona = async (id) => {

    if (window.confirm("Delete?")) {
        const estudiantesDoc = doc(db, "estudiantes", id)
        await deleteDoc(estudiantesDoc)
        // window.location.reload(false);
        alert("Elemento borrado")
        // Navigate("/")
        window.location.reload(false);
    }else{
        alert("Operacion cancelada")
        // Navigate("/")   
    }
    

}