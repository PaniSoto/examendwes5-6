import { insertarPedido } from "@/lib/actions";
// import { useEffect, useActionState, useId } from "react";


function PedidoInsertar({ repartidores, pizzas }) {
   
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

            {
                <select name="nombre">
                    <option value="">-- Seleccione una pizza --</option>
                    {pizzas.map(pizza => (
                        <option key={pizza.id} value={pizza.id}>
                            {pizza.nombre}
                        </option>
                    ))}
                </select>
            }

            <button
                className="border-2 border-black disabled:bg-gray-200"
            >
                Insertar
            </button>
        </form>
    );
}

export default PedidoInsertar;