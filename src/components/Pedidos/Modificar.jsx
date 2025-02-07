import { modificarPedido } from "@/lib/actions";

function PedidoModificar({ pedido, repartidores, pizzas }) {

    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input type="date" name='fechaHora' defaultValue={pedido.fechaHora} />
            <input name='nombreCliente' placeholder="nombreCliente" defaultValue={pedido.nombreCliente} />
            <input name='direccionCliente' placeholder="direccionCliente" defaultValue={pedido.direccionCliente} />
            <input name='repartidorId' placeholder="repartidorId" defaultValue={pedido.repartidorId} />

            <input name='nombre' defaultValue={repartidores.nombre} />

            {
                <select name="repartidorId">
                    <option value="">-- Seleccione un repartidor --</option>
                    {repartidores.map(repartidor => (
                        <option key={repartidor.id} value={repartidor.id}>
                            {repartidor.nombre}
                        </option>
                    ))}
                </select>
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

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PedidoModificar;