import { Bid } from "../entities/bid";
import { RepositoryBase } from "./repositoryBase";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BidRepository extends RepositoryBase<Bid> {

}