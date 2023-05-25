import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterRequestModel, UserLoginModel } from '../models/userModel';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() login: UserLoginModel) {
        return this.authService.login(login.username, login.password);
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    register(@Body() registerModel: UserRegisterRequestModel) {
        return this.authService.login(registerModel.username, registerModel.password);
    }
}
