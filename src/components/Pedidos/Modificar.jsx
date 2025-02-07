import { modificarPedido} from "@/lib/actions";

function PedidoModificar({ pedido }) {

    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input type="date" name='fechaHora' defaultValue={pedido.fechaHora} />

            <input name='nombreCliente' placeholder="nombreCliente" defaultValue={pedido.nombreCliente} />

            <input name='direccionCliente' placeholder="direccionCliente" defaultValue={pedido.direccionCliente} />

            <input name='repartidorId' placeholder="repartidorId" defaultValue={pedido.repartidorId} />

            

            {/* <input name='nombre' defaultValue={plantas.nombre} /> importar plantas */}

            {/* {
                <select name="plantaId">
                    <option value="">-- Seleccione una planta --</option>
                    {plantas.map(planta => (
                        <option key={planta.id} value={planta.id}>
                            {planta.nombre}
                        </option>
                    ))}
                </select>
            } */}

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PedidoModificar;