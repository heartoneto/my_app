import { Categoria } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { catergoriaPorNombre } from '../../../lib/db/db_categoria';
import { IResponseType } from '../../../lib/utils/types';

export default async function categoriaPorNombreHandler(req: NextApiRequest, res: NextApiResponse<IResponseType<Categoria>>) {
    const {
        query: { nombre },
        method,
    } = req

    console.warn(typeof nombre);
    switch (method) {
        case 'GET':
            if (typeof nombre != "string") {
                res.status(400);
            } else {
                const data = await catergoriaPorNombre(nombre);
                res.status(200).json({ success: true, data: data });
            }
            break
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
