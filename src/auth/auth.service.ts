import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../services/userService';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async login(username: string, pass: string): Promise<any> {

        try {
            const user = await this.userService.findOne(username);

            if (!bcrypt.compare(pass, user.password)) {
                throw new UnauthorizedException();
            }

            return {
                access_token: await this.jwtService.signAsync({
                    sub: user.id,
                    username: user.name
                }),
            }

        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    async register(username: string, pass: string): Promise<any> {

        const user = await this.userService.findOne(username);

        if (user) {
            throw new HttpException('username already exists', HttpStatus.BAD_REQUEST);
        }

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(pass, salt);

        this.userService.register(username, hashedPassword, salt);
    }
}