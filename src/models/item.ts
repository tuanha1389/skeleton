import { Model } from "./modelBase";

export enum ItemStatus {
    Draft,
    Pushed,
    Released
}

export class ItemModel extends Model {
    balanceId: number;
    amount: number;
    status: ItemStatus;
    timeWindow: number;
}