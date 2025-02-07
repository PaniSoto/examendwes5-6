import { insertarRepartidor } from "@/lib/actions";
// import { useEffect, useActionState, useId } from "react";


function RepartidorInsertar({repartidores}) {
    //{ medicinas }arriba esto

    // const formId = useId();

    // const [state, action, pending] = useActionState(insertarAsignatura, {});

    // useEffect(() => { 
    //     if(state.success) alert(state.success)
    //         document.getElementById(formId)?.closest('dialog')?.close()
    //  }, [state])

    return (
        <form action={insertarRepartidor}>
            <input name="nombre" placeholder="Nombre" />
            <input name="telefono" placeholder="Telefono" />
            {/* {
                repartidores.map(repartidor =>
                    <label key={repartidor.id}>
                        <input
                            type="checkbox"
                            name={`repartidor${repartidor.id}`}
                            value={repartidor.nombre} />

                        {repartidor.nombre}

                    </label>
                )
            } */}

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

export default RepartidorInsertar;