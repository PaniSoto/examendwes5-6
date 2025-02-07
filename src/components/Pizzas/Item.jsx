import { obtenerPizza } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Pizza({ id }) {
    const pizza = await obtenerPizza(id)

    if (!pizza) notFound()

    return (
        <div key={pizza.id}>
            <p> {pizza.nombre} </p>
            <p> {pizza.precio} </p>
        </div>
    );
}
