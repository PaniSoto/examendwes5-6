import { insertarPedido } from "@/lib/actions";
// import { useEffect, useActionState, useId } from "react";


function PedidoInsertar({repartidores}) {
    //{ medicinas }arriba esto

    // const formId = useId();

    // const [state, action, pending] = useActionState(insertarAsignatura, {});

    // useEffect(() => { 
    //     if(state.success) alert(state.success)
    //         document.getElementById(formId)?.closest('dialog')?.close()
    //  }, [state])

    return (
        <form action={insertarPedido}>
             <input type="date" name="fechaHora" />
            <input name="nombreCliente" placeholder="NombreCliente" />
            <input name="direccionCliente" placeholder="direccionCliente" />
            <input name="repartidorId" placeholder="repartidorId" />
            
            {
                repartidores.map(repartidor =>
                    <label key={repartidor.id}>
                        <input
                            type="checkbox"
                            name={`repartidor${repartidor.id}`}
                            value={repartidor.nombre} />

                        {repartidor.nombre}

                    </label>
                )
            }

            <button
                // disabled={pending}
                className="border-2 border-black disabled:bg-gray-200"
            >
                {/* {pending ? "Insertando..." : "Insertar asignatura"} */}
                Insertar
            </button>
        </form>
    );
}

export default PedidoInsertar;