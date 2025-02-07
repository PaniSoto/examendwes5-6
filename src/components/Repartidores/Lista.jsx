// import Modal from "@/components/Modal";
// import { obtenerAsignaturas, obtenerEstudiantes } from "@/lib/data";
import { obtenerRepartidores } from "@/lib/data";
// import AsignaturaEliminar from "./Eliminar";
// import AsignaturaModificar from "./Modificar";
// import AsignaturaInsertar from "./Insertar";
import Link from "next/link";
import RepartidorInsertar from "./Insertar";
import RepartidorModificar from "./Modificar";
import RepartidorEliminar from "./Eliminar";
// import RepartidorInsertar from "./Insertar";
export default async function Repartidores() {
    const repartidores = await obtenerRepartidores()
    // const estudiantes = await obtenerEstudiantes()
    //console.log(asignaturas);
    return (
        <div>
            {/* <Modal openElement={<p className="inline border-2 border-black">Insertar asignatura</p>}>
                
            </Modal> */}
            {/* <RepartidorInsertar repartidores={repartidores} /> */}

            {
                repartidores.map(repartidor =>
                    <div key={repartidor.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/repartidores/${repartidor.id}`} className="text-2xl block">
                                {repartidor.nombre}
                            </Link>
                            <p>{repartidor.telefono}</p>
                        </div>
                        {/* <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            
                        </Modal>
                        
                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            
                        </Modal> */}
                        {/* <RepartidorModificar repartidor={repartidor}/> */}

                        {/* <RepartidorEliminar repartidor={repartidor} /> */}
                        <hr />
                    </div>
                )
            }
        </div>
    );
}