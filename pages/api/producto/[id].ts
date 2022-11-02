import { Categoria, Producto } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { catergoriaPorNombre } from '../../../lib/db/db_categoria';
import { productoPorId } from '../../../lib/db/db_producto';
import { IResponseType } from '../../../lib/utils/types';

export default async function productoHandler(req: NextApiRequest, res: NextApiResponse<IResponseType<Producto>>) {
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
                const data = await productoPorId(finalId);
                res.status(200).json({ success: true, data: data });
            }
            break
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
