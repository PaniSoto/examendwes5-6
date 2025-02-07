// import Modal from "@/components/Modal";
// import { obtenerAsignaturas, obtenerEstudiantes } from "@/lib/data";
import { obtenerPizzas } from "@/lib/data";
// import AsignaturaEliminar from "./Eliminar";
// import AsignaturaModificar from "./Modificar";
// import AsignaturaInsertar from "./Insertar";
import Link from "next/link";
import PizzaInsertar from "./Insertar";
import PizzaModificar from "./Modificar";
import PizzaEliminar from "./Eliminar";
export default async function Pizzas() {
    const pizzas = await obtenerPizzas()
    // const estudiantes = await obtenerEstudiantes()
    //console.log(asignaturas);
    return (
        <div>
            {/* <Modal openElement={<p className="inline border-2 border-black">Insertar asignatura</p>}>
                
            </Modal> */}

            <PizzaInsertar pizzas={pizzas} />
            {
                pizzas.map(pizza =>
                    <div key={pizza.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pizzas/${pizza.id}`} className="text-2xl block">
                                {pizza.nombre}
                            </Link>
                            <p>{pizza.precio}</p>

                        </div>
                        {/* <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                        </Modal>
                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            
                        </Modal> */}
                        <PizzaModificar pizza={pizza} />
                        <PizzaEliminar pizza={pizza} />

                        <hr />
                    </div>
                )
            }
        </div>
    );
}