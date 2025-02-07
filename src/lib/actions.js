'use server'
import { revalidatePath } from 'next/cache'

import prisma from '@/lib/prisma'

//  ------------------------ REPARTIDORES ------------------------

export async function insertarRepartidor(formData) {
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')

    await prisma.repartidor.create({
        data: {
            nombre: nombre,
            telefono: telefono
        }
    })

    revalidatePath('/repartidores')
}

export async function modificarRepartidor(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')

    await prisma.repartidor.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            telefono: telefono
        }
    })

    revalidatePath('/repartidores')
}

export async function eliminarRepartidor(formData) {
    const id = Number(formData.get('id'))

    await prisma.repartidor.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/repartidores')
}

//  ------------------------ PEDIDOS ------------------------

export async function insertarPedido(formData) {
    const fechaHora = new Date(formData.get('fechaHora'))
    const nombreCliente = formData.get('nombreCliente')
    const direccionCliente = formData.get('direccionCliente')
    const repartidorId = formData.get('repartidorId')

    await prisma.pedido.create({
        data: {
            fechaHora: fechaHora,
            nombreCliente: nombreCliente,
            direccionCliente: direccionCliente,
            repartidorId: +repartidorId
        }
    })

    revalidatePath('/pedidos')
}

export async function modificarPedido(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const fechaNacimiento = new Date(formData.get('fechaNacimiento'))
    const plantaId = formData.get('plantaId')

    await prisma.pedido.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            fechaNacimiento: fechaNacimiento,
            plantaId: +plantaId
        }
    })

    revalidatePath('/pedidos')
}

export async function eliminarPaciente(formData) {
    const id = Number(formData.get('id'))

    await prisma.paciente.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/pedidos')
}

// ------------------------------- ASIGNATURAS -----------------------

export async function insertarPlanta(formData) {
    const nombre = formData.get('nombre')
    const jefePlanta = formData.get('jefePlanta')

    await prisma.planta.create({
        data: {
            nombre: nombre,
            jefePlanta: jefePlanta,
        }
    })

    revalidatePath('/plantas')
}

export async function modificarPlanta(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const jefePlanta = formData.get('jefePlanta')

    await prisma.planta.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            jefePlanta: jefePlanta
        }
    })

    revalidatePath('/plantas')
}

export async function eliminarPlanta(formData) {
    const id = Number(formData.get('id'))

    await prisma.planta.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/plantas')
}