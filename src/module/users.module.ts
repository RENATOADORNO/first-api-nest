import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from 'src/controller/user.controller';
import { UserRepository } from 'src/repositories/user.repository';
import { UserModel } from 'src/model/user.model';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/jwtConstants';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '120s' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, { provide: UserModel, useClass: UserRepository }],
})
export class UsersModule {}
