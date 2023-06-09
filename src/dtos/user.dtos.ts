import { Length, IsEmail, IsNotEmpty } from 'class-validator';

// import {
//   validate,
//   validateOrReject,
//   Contains,
//   IsInt,
//   Length,
//   IsEmail,
//   IsFQDN,
//   IsDate,
//   Min,
//   Max,
//   IsNotEmpty,
// } from 'class-validator';

export class UserDtosRegister {
  @IsNotEmpty({
    message: 'O campo email não pode ser vazio.',
  })
  @Length(3, 50, {
    message: 'O campo email não pode ser vazio.',
  })
  @IsEmail()
  email: string;

  @IsNotEmpty({
    message: 'O campo nome não pode ser vazio.',
  })
  @Length(3, 50, {
    message: 'O campo nome deve ter entre 3 a 50 caracteres.',
  })
  name: string;

  @IsNotEmpty({
    message: 'O campo password não pode ser vazio.',
  })
  @Length(8, 50, {
    message: 'O campo password deve ter entre 8 a 50 caracteres.',
  })
  password: string;
}
