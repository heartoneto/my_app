import { Categoria } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { crearCategoria, NuevaCategoria, obtenerCategorias } from '../../../lib/db/db_categoria'
import { IResponseType } from '../../../lib/utils/types';

export default async function categoriasHandler(req: NextApiRequest, res: NextApiResponse<IResponseType<{}>>) {
    const {
        body,
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            const data = await obtenerCategorias();
            res.status(200).json({ success: true, data: data });
            break
        case 'POST':
            const categoria: NuevaCategoria = body;
            const resData = await crearCategoria(categoria);
            res.status(200).json({ success: true, data: {} });
        default:
            res.status(200).json({ success: true, data: {} });
            break;
    }
}
