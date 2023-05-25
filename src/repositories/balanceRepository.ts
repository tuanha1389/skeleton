import { Balance } from "../entities/balance";
import { RepositoryBase } from "./repositoryBase";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BalanceRepository extends RepositoryBase<Balance> {

}