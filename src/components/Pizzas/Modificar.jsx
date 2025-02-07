import { modificarPizza} from "@/lib/actions";

function PizzaModificar({ pizza }) {

    return (
        <form action={modificarPizza}>
            <input type="hidden" name="id" defaultValue={pizza.id} />
   

            <input name='nombre' placeholder="nombre" defaultValue={pizza.nombre} />

            <input name='precio' placeholder="precio" defaultValue={pizza.precio} />



            

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

export default PizzaModificar;