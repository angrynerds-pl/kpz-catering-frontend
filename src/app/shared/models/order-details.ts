import { ClientInfo } from './ClientInfo';
import {Dish} from './dish';
import {Address} from './address';

export class OrderDetails {
    public client: ClientInfo;
    public dishes: Dish[];
    public sum: number;
    public orderTime: Date;
    public status: string;
    public perdiodicity = true;
    public address: Address;
    public timePreference = 'morning';
    public orderDeliveredTime: Date;
}
