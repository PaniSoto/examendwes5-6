import { modificarPizza} from "@/lib/actions";

function PizzaModificar({ pizza }) {

    return (
        <form action={modificarPizza}>
            <input type="hidden" name="id" defaultValue={pizza.id} />
   

            <input name='nombre' placeholder="nombre" defaultValue={pizza.nombre} />

            <input name='precio' placeholder="precio" defaultValue={pizza.precio} />

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PizzaModificar;