import type { NextApiRequest, NextApiResponse } from 'next'
import { crearProducto, NuevoProducto, obtenerProductos } from '../../../lib/db/db_producto';
import { IResponseType } from '../../../lib/utils/types';

export default async function productosHandler(req: NextApiRequest, res: NextApiResponse<IResponseType<{}>>) {
    const {
        body,
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            const data = await obtenerProductos();
            res.status(200).json({ success: true, data: data });
            break
        case 'POST':
            const producto: NuevoProducto = body;
            const resData = await crearProducto(producto);
            res.status(200).json({ success: true, data: resData });
        default:
            res.status(500).json({ success: false, data: {} });
            break;
    }
}
