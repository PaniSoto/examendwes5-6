import { obtenerPedido } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Pedido({ id }) {
    const pedido = await obtenerPedido(id)
    // console.log(pedido);

    if (!pedido) notFound()

    return (
        <div key={pedido.id}>
            <p> {pedido.fechaHora.toISOString().split('T')[0]} </p>
            <p> {pedido.nombreCliente} </p>
            <p> {pedido.direccionCliente} </p>
            <p> {pedido.repartidorId} </p>
        </div>
    );
}
