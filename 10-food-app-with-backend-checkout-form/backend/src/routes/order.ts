import { Router } from 'express';
import { OrderController } from '../controller/order';
const router = Router();
const orderController = new OrderController();

router.get('/', orderController.getAllOrders);
router.post('/', orderController.createOrder);

export const OrderRouter = router;