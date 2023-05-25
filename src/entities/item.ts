import { GeneralEntity } from "./entityBase";

export enum ItemStatus {
    Draft,
    Pushed,
    Released
}

export class Item extends GeneralEntity {
    balanceId: number;
    amount: number;
    status: ItemStatus;
    timeWindow: number;
}