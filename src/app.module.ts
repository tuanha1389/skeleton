import { Module } from '@nestjs/common';
import { RepositoryModule } from './repositories/repository.module';
import { ServiceModule } from './services/service.module';
import { UserController } from './controllers/user.controller';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/roles.guard';

@Module({
  imports: [
    RepositoryModule,
    ServiceModule,
    AuthModule,

  ],
  controllers: [
    UserController,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule { }
