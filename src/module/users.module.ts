import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from 'src/controller/user.controller';
import { UserRepository } from 'src/repositories/user.repository';
import { UserModel } from 'src/model/user.model';

@Module({
  controllers: [UserController],
  providers: [UserService, { provide: UserModel, useClass: UserRepository }],
})
export class UsersModule {}
