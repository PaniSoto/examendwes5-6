import { eliminarPedido } from "@/lib/actions";

function PedidoEliminar({ pedido }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>Nombre: {pedido.nombre}</p>
            <p>Precio: {pedido.precio}</p>
            <form action={eliminarPedido}>
                <input type="hidden" name="id" defaultValue={pedido.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}

export default PedidoEliminar;