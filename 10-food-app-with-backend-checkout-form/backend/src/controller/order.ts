import { Request, Response } from 'express';
import { Order } from '../model/order';
export class OrderController {
    public getAllOrders = async (req: Request, res: Response) => {
        const orders = await Order.find();
        console.log(orders);

        return res.json({
            msg: `Found ${orders.length} records`,
            data: orders
        });
    }

    public createOrder = async (req: Request, res: Response) => {
        console.log(req.body)
        if (!req.body || Object.keys(req.body).length !== 3) {
            return res.status(400).json({
                msg: `Invalid request data`,
            });
        }

        const order = await Order.create(req.body);

        return res.status(201).json({
            msg: `order created successfully`,
            order
        });
    }

}