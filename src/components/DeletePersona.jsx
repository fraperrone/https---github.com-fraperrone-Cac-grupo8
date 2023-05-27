
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"

import swal from 'sweetalert';




export const DeletePersona = async (id) => {



    //Sweet alert
    swal({
        title: "Estas seguro?",
        text: "Una vez eliminado, no podrá recuperarse",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Tarjeta CV, Eliminada", {
                    icon: "success",
                });
                ConfirmarDeletePersona(id)
                
            } else {
                swal("Operacion Cancelada");
            }
        });

    //alert Default
    // if (window.confirm("Delete?")) {
    //     const estudiantesDoc = doc(db, "estudiantes", id)
    //     await deleteDoc(estudiantesDoc)
    //     // window.location.reload(false);
    //     alert("Elemento borrado")
    //     // Navigate("/")
    //     //window.location.reload(false);
    // }else{
    //     alert("Operacion cancelada")
    //     // Navigate("/")   
    // }


}

const ConfirmarDeletePersona = async (id) => {

    const estudiantesDoc = doc(db, "estudiantes", id)
    await deleteDoc(estudiantesDoc)
    // window.location.reload(false);
    //alert("Elemento borrado")
    // Navigate("/")
    //window.location.reload(false);
    // useEffect( ()=>{

    //  Show()},[])

}
