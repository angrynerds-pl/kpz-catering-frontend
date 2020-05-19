import { ClientInfo } from 'src/app/core/Models/ClientInfo';
import {Dish} from 'src/app/core/Models/dish';

export class FullOrderDetails {

    public order: ClientInfo;
    public dishes: Dish[];
    public sum: number;
    public orderTime: Date;
    public timePreference: string;
    public status: string;
    public periodicity: boolean;
}