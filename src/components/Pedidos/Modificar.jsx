import { modificarRepartidor } from "@/lib/actions";

function RepartidorModificar({ repartidor }) {

    return (
        <form action={modificarRepartidor}>
            <input type="hidden" name="id" defaultValue={repartidor.id} />
            <input name='nombre' defaultValue={repartidor.nombre} />
            <input name='telefono' defaultValue={repartidor.telefono} />

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

export default RepartidorModificar;