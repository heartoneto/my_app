import { Categoria } from "@prisma/client";
import prisma from "./prisma"

export async function catergoriaPorNombre(nombre: string): Promise<Categoria | null> {
    const res = await prisma.categoria.findFirst({
        where: {
            nombre: {
                equals: nombre,
            }
        },
    });

    return res;
}

export async function obtenerCategorias(): Promise<Categoria[] | null> {
    const res = await prisma.categoria.findMany();

    return res;
}

export interface NuevaCategoria {
    nombre: string,
}

export async function crearCategoria(categoria: NuevaCategoria) {
    const res = await prisma.categoria.create({
        data: {
            nombre: categoria.nombre,
        },
    });

    return res;
}
