import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/model/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userModel: UserModel) {}

  async register(email: string, name: string, password: string) {
    const hash = await bcrypt.hash(password, 10);

    await this.userModel.register(email, name, hash);
  }
}
