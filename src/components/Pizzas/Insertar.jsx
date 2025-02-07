import { insertarPizza } from "@/lib/actions";
// import { useEffect, useActionState, useId } from "react";


function PizzaInsertar({pizzas}) {
   
    return (
        <form action={insertarPizza}>
            <input name="nombre" placeholder="Nombre" />
            <input name="precio" placeholder="precio" />

            <button
                className="border-2 border-black disabled:bg-gray-200"
            >
                Insertar
            </button>
        </form>
    );
}

export default PizzaInsertar;