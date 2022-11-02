import { Producto, Proveedor } from "@prisma/client";
import prisma from "./prisma"

export async function productoPorId(id: number): Promise<Producto | null> {
    const res = await prisma.producto.findFirst({
        where: {
            id: {
                equals: id,
            }
        },
    });

    return res;
}

export async function productoPorCategoria(categoria_id: number): Promise<Producto | null> {
    const res = await prisma.producto.findFirst({
        where: {
            Categoria: {
                id: {
                    equals: categoria_id,
                },
            },
        },
    });

    return res;
}

export async function obtenerProductos(): Promise<Producto[] | null> {
    const res = await prisma.producto.findMany();

    return res;
}


export interface NuevoProducto {
    nombre: string
    categoriaId: number
    proveedorId: number
}

export async function crearProducto(producto: NuevoProducto) {
    const res = await prisma.producto.create({
        data: {
            nombre: producto.nombre,
            categoriaId: producto.categoriaId,
            proveedorId: producto.proveedorId,
        }
    });

    return res;
}
