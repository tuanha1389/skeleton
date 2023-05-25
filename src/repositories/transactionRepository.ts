import { Transaction } from "../entities/transaction";
import { RepositoryBase } from "./repositoryBase";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TransactionRepository extends RepositoryBase<Transaction> {

}