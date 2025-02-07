import { insertarPizza } from "@/lib/actions";
// import { useEffect, useActionState, useId } from "react";


function PizzaInsertar({pizzas}) {
    //{ medicinas }arriba esto

    // const formId = useId();

    // const [state, action, pending] = useActionState(insertarAsignatura, {});

    // useEffect(() => { 
    //     if(state.success) alert(state.success)
    //         document.getElementById(formId)?.closest('dialog')?.close()
    //  }, [state])

    return (
        <form action={insertarPizza}>
            <input name="nombre" placeholder="Nombre" />
            <input name="precio" placeholder="precio" />
            
            {/* {
                pizzas.map(pizza =>
                    <label key={pizza.id}>
                        <input
                            type="checkbox"
                            name={`pizza${pizza.id}`}
                            value={pizza.nombre} />

                        {pizza.nombre}

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

export default PizzaInsertar;