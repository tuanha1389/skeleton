import { DepositStatus } from "../entities/deposit";
import { Model } from "./modelBase";

export class Deposit extends Model {
    balanceId: number;
    amount: number;
    status: DepositStatus;
}