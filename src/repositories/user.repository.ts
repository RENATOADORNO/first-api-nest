// import { PrismaService } from 'src/config/prisma.service';
import { UserModel } from 'src/model/user.model';
import { PrismaClient } from '@prisma/client';

export class UserRepository implements UserModel {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async register(email: string, name: string, password: string): Promise<void> {
    await this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
  }
}
