import { Deposit } from "../entities/deposit";
import { RepositoryBase } from "./repositoryBase";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DepositRepository extends RepositoryBase<Deposit> {

}