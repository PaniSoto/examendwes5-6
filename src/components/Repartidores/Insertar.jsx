import { insertarRepartidor } from "@/lib/actions";
// import { useEffect, useActionState, useId } from "react";


function RepartidorInsertar({repartidores}) {
   
    return (
        <form action={insertarRepartidor}>
            <input name="nombre" placeholder="Nombre" />
            <input name="telefono" placeholder="Telefono" />

            <button
                className="border-2 border-black disabled:bg-gray-200"
            >
                Insertar
            </button>
        </form>
    );
}

export default RepartidorInsertar;