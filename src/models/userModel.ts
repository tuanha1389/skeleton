import { Model } from "./modelBase";
import { IsNotEmpty } from 'class-validator';


export class UserRegisterRequestModel extends Model {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
}

export class UserLoginModel extends Model {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
}

export class UserProfile extends Model {
    name: string;
}