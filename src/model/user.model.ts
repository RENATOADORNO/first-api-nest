export abstract class UserModel {
  abstract register(
    email: string,
    name: string,
    password: string,
  ): Promise<void>;
}
