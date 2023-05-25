import { GeneralEntity } from "./entityBase";

export class Bid extends GeneralEntity {
    itemId: number;
    time: number; // timestamp format
}