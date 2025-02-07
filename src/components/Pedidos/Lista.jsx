import { obtenerPedidos, obtenerPizzas, obtenerRepartidores } from "@/lib/data";
import Link from "next/link";
import PedidoInsertar from "./Insertar";
import PedidoModificar from "./Modificar";
import PedidoEliminar from "./Eliminar";
import Modal from "@/components/Modal";

export default async function Pedidos() {
    const pedidos = await obtenerPedidos()
    const repartidores = await obtenerRepartidores()
    const pizzas = await obtenerPizzas()
    
    return (
        <div>
            <Modal openElement={<p className="inline border-2 border-black">Insertar pedido</p>}>
                <PedidoInsertar pedidos={pedidos} repartidores={repartidores} pizzas={pizzas} />
            </Modal>

            {
                pedidos.map(pedido =>
                    <div key={pedido.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pedidos/${pedido.id}`} className="text-2xl block">
                                {pedido.fechaHora.toISOString().split('T')[0]}
                            </Link>

                            <p>{pedido.nombreCliente}</p>
                            <p>{pedido.direccionCliente}</p>
                            <p>{pedido.repartidorId}</p>

                        </div>
                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <PedidoModificar pedido={pedido} repartidores={repartidores} pizzas={pizzas} />
                        </Modal>
                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <PedidoEliminar pedido={pedido} />
                        </Modal>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}