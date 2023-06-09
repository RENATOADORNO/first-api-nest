import { Controller, Post, Body } from '@nestjs/common';
import { UserDtosRegister } from 'src/dtos/user.dtos';
import { UserService } from 'src/service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: UserDtosRegister) {
    const { email, name, password } = body;

    await this.userService.register(email, name, password);

    return {
      message: 'Usuario criado com sucesso',
    };
  }
}
