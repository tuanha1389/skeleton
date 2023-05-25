import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/userRepository";
import { UserProfile } from "../models/userModel";

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {

    }

    findOne(username: string) {
        const { id, name, salt, password } = this.userRepository.findByName(username);
        return {
            name,
            id,
            salt,
            password
        };
    }

    findById(userId: string): UserProfile {
        const { id, name, } = this.userRepository.findById(userId);
        return <UserProfile>{
            name,
            id,
        };
    }

    register(username: string, hashedPassword: string, salt: string) {
        this.userRepository.save({
            name: username,
            password: hashedPassword,
            salt: salt,
            id: 1
        });
    }

}