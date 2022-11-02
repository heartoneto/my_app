import { Contacto, Proveedor } from "@prisma/client";
import prisma from "./prisma"

export async function proveedorPorId(id: number): Promise<Proveedor | null> {
    const res = await prisma.proveedor.findFirst({
        include: {
            Contacto: true,
        },
        where: {
            id: {
                equals: id,
            }
        },
    });

    return res;
}

export async function obtenerProveedores(): Promise<Proveedor[] | null> {
    const res = await prisma.proveedor.findMany({

        include: {
            Contacto: true,
        },
    });

    return res;
}

export interface NuevoProvedor {
    nombre: string,
    contacto: Contacto,
}

export async function crearProveedor(proveedor: NuevoProvedor) {
    const res = await prisma.proveedor.create({
        include: {
            Contacto: true,
        },
        data: {
            nombre: proveedor.nombre,
            Contacto: {
                create: {
                    email: proveedor.contacto.email,
                    telefono: proveedor.contacto.telefono,
                },
            },
        }
    });

    return res;
}
