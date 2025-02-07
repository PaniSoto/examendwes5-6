// import Modal from "@/components/Modal";
// import { obtenerAsignaturas, obtenerEstudiantes } from "@/lib/data";
import { obtenerRepartidores } from "@/lib/data";
// import AsignaturaEliminar from "./Eliminar";
// import AsignaturaModificar from "./Modificar";
// import AsignaturaInsertar from "./Insertar";
import Link from "next/link";
export default async function Repartidores() {
    const repartidores = await obtenerRepartidores()
    // const estudiantes = await obtenerEstudiantes()
    //console.log(asignaturas);
    return (
        <div>
            {/* <Modal openElement={<p className="inline border-2 border-black">Insertar asignatura</p>}>
                <AsignaturaInsertar estudiantes={estudiantes} />
            </Modal> */}
            {
                repartidores.map(repartidor =>
                    <div key={repartidor.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/repartidors/${repartidor.id}`} className="text-2xl block">
                                {repartidor.nombre}
                            </Link>
                            <p>{repartidor.telefono}</p>
                        </div>
                        {/* <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <AsignaturaModificar asignatura={asignatura} estudiantes={estudiantes}/>
                        </Modal>
                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <AsignaturaEliminar asignatura={asignatura} />
                        </Modal> */}
                        <hr />
                    </div>
                )
            }
        </div>
    );
}