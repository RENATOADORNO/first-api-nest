import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UserDtosLogin, UserDtosRegister } from 'src/dtos/user.dtos';
import { UserService } from 'src/service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(@Body() body: UserDtosRegister) {
    const { email, name, password } = body;

    await this.userService.register(email, name, password);

    return {
      message: 'Usuario criado com sucesso',
    };
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() body: UserDtosLogin) {
    const { email, password } = body;

    const newLogin = await this.userService.login(email, password);

    return newLogin;
  }
}
