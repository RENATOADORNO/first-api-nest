import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserModel } from 'src/model/user.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userModel: UserModel, private jwtService: JwtService) {}

  async register(email: string, name: string, password: string) {
    const hash = await bcrypt.hash(password, 10);

    await this.userModel.register(email, name, hash);
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findUser(email);

    if (!user) throw new UnauthorizedException();

    const isValidHash = await bcrypt.compare(password, user.password);

    if (!isValidHash) throw new UnauthorizedException();

    const payload = { sub: user.id, username: user.email };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }
}
