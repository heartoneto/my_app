import { Vendedor } from "@prisma/client";
import prisma from "./prisma"

export async function vendedorPorNombre(nombre: string): Promise<Vendedor | null> {
    const res = await prisma.vendedor.findFirst({
        where: {
            nombre: {
                equals: nombre,
            }
        },
    });

    return res;
}

export async function vendedorPorId(vendedor_id: number): Promise<Vendedor | null> {
    const res = await prisma.vendedor.findFirst({
        where: {
            id: {
                equals: vendedor_id,
            }
        },
    });

    return res;
}

export async function obtenerVendedores(): Promise<Vendedor[] | null> {
    const res = await prisma.vendedor.findMany();

    return res;
}
