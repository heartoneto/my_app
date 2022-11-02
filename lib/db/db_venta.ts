import { Producto, Venta } from "@prisma/client";
import prisma from "./prisma"

export async function obtenerVentas(): Promise<Venta[] | null> {
    const res = await prisma.venta.findMany({
        include: {
            Usuario: true,
            Vendedor: true,
            productoCantidad: true,
        }
    });

    return res;
}

export type ProductoCantidad = {
    productoId: number,
    cantidad: number,
}

export interface NuevaVenta {
    compradorId: number,
    vendedorId: number,
    importe: number,
    productoCantidad: ProductoCantidad[],
}

export async function crearVenta(venta: NuevaVenta) {
    const manyInput = venta.productoCantidad.map(p => ({
        cantidad: p.cantidad,
        productoId: p.productoId
    }));

    const res = await prisma.venta.create({
        include: {
            productoCantidad: true,
        },
        data: {
            importe: venta.importe,
            compradorId: venta.compradorId,
            vendedorId: venta.vendedorId,
            productoCantidad: {
                createMany: {
                    data: manyInput,
                },
            },
        },
    });

    return res;
}
