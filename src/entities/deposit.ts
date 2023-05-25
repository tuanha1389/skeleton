import { GeneralEntity } from "./entityBase";

export enum DepositStatus {
    Blank,
    Partially,
    Completed
}

export class Deposit extends GeneralEntity {
    balanceId: number;
    amount: number;
    status: DepositStatus;
}