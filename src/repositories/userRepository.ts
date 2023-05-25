import { User } from "../entities/user";
import { RepositoryBase } from "./repositoryBase";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository extends RepositoryBase<User> {
    findByName(name: string): User {
        const user = this.storage.find(x => x.name === name);
        if (!user) throw 'user name does not exsit';
        return user;
    }
}