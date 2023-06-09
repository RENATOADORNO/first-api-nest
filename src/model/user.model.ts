import { UserType } from 'src/types/user.types';

export abstract class UserModel {
  abstract register(
    email: string,
    name: string,
    password: string,
  ): Promise<void>;

  abstract findUser(email: string): Promise<UserType | null>;
}
