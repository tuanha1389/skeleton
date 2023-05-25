import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { UserService } from '../services/userService';
import { UserProfile } from '../models/userModel';
import { Roles } from '../roles/roles.decorator';
import { UserRole } from '../roles/userRoles';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @UseGuards(AuthGuard)
    @Roles(UserRole.Regular)
    @Get('profile/:id')
    getProfile(@Param('id') id: string): UserProfile {
        return this.userService.findById(id);
    }
}