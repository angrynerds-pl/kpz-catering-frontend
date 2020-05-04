import { Order } from './order';
import {Dish} from './dish';

export class OrderDetails {
    public order: Order;
    public dishes: Dish[];
    public sum: number;
}
