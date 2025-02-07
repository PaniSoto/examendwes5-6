

import Pedidos from "@/components/Pedidos/Lista";
import { Suspense } from "react";


function PaginaPedidos() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE PEDIDOS</h1>

            <Suspense fallback={"Obteniendo pedidos ..."}>
                <Pedidos />
            </Suspense>
        </div>
    )

}

export default PaginaPedidos;