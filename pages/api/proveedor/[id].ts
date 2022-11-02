import { Categoria, Proveedor } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { catergoriaPorNombre } from '../../../lib/db/db_categoria';
import { obtenerProveedores, proveedorPorId } from '../../../lib/db/db_proveedor';
import { IResponseType } from '../../../lib/utils/types';

export default async function proveedorPorIdHandler(req: NextApiRequest, res: NextApiResponse<IResponseType<Proveedor>>) {
    const {
        query: { id },
        method,
    } = req

    switch (method) {
        case 'GET':
            if (typeof id != "string") {
                res.status(400);
            } else {
                const finalId = Number.parseInt(id);
                const data = await proveedorPorId(finalId);
                res.status(200).json({ success: true, data: data });
            }
            break
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
