import type { NextApiRequest, NextApiResponse } from 'next'
import { crearVenta, NuevaVenta, obtenerVentas } from '../../../lib/db/db_venta';
import { IResponseType } from '../../../lib/utils/types';

export default async function ventaHandler(req: NextApiRequest, res: NextApiResponse<IResponseType<{}>>) {
    const {
        body,
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            const data = await obtenerVentas();
            res.status(200).json({ success: true, data: data });
            break;
        case 'POST':
            const venta: NuevaVenta = body;
            const resData = await crearVenta(venta);
            res.status(200).json({ success: true, data: {} });
            break;
        default:
            res.status(200).json({ success: true, data: {} });
            break;
    }
}
