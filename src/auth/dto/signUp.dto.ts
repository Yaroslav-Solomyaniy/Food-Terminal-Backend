import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsString()
  surName: string;
  @IsEmail()
  email: string;
  @Length(3, 20, { message: 'Пароль має містити від 3 до 20 символів' })
  password: string;
  @IsString()
  phoneNumber: string;
}
