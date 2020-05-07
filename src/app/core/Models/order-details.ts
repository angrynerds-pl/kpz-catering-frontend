import { ClientInfo } from './ClientInfo';
import {Dish} from './dish';

export class OrderDetails {
    public client: ClientInfo;
    public dishes: Dish[];
    public sum: number;
    public timePreference = 'morning'
}
