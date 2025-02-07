import { eliminarRepartidor } from "@/lib/actions";

function RepartidorEliminar({ repartidor }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>Nombre: {repartidor.nombre}</p>
            <p>Teléfono: {repartidor.telefono}</p>
            <form action={eliminarRepartidor}>
                <input type="hidden" name="id" defaultValue={repartidor.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}

export default RepartidorEliminar;