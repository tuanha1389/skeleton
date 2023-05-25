import { Item } from "../entities/item";
import { RepositoryBase } from "./repositoryBase";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ItemRepository extends RepositoryBase<Item> {

}