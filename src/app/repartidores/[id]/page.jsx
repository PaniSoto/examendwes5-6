
import Repartidor from "@/components/Repartidores/Item";
import { Suspense } from "react";


async function PaginaRepartidor({ params, searchParams }) {
    const { id } = await params

    return (
        <div>
            <h1>DATOS DEL REPARTIDOR</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Repartidor id={id} />
            </Suspense>
        </div>
    )
}

export default PaginaRepartidor;


function Skeleton() {
    return (
        <div className="flex w-full flex-col gap-4">
            <div className="flex items-center gap-4">
                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-52"></div>
                    <div className="skeleton h-4 w-80"></div>
                </div>
            </div>
            <div className="skeleton h-72 w-full"></div>
        </div>
    )

}