import { Entity } from "./entityBase";

export class User extends Entity {
    name: string;
    password: string;
    salt: string;    
}