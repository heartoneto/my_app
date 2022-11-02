import { Categoria } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { crearProveedor, NuevoProvedor, obtenerProveedores } from '../../../lib/db/db_proveedor';
import { IResponseType } from '../../../lib/utils/types';

export default async function provedorHandler(req: NextApiRequest, res: NextApiResponse<IResponseType<{}>>) {
    const {
        body,
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            const data = await obtenerProveedores();
            res.status(200).json({ success: true, data: data });
            break
        case 'POST':
            const proveedor: NuevoProvedor = body;
            const resData = await crearProveedor(proveedor);
            res.status(200).json({ success: true, data: {} });
        default:
            res.status(200).json({ success: true, data: {} });
            break;
    }
}
