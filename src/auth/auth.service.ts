import { BadRequestException, Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/signUp.dto';
import { SignInDto } from './dto/signIn.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService, private prisma: PrismaService) {}
  async signUp(dto: SignUpDto) {
    const { email, surName, lastName, phoneNumber, password, firstName } = dto;
    const isUser = await this.prisma.user.findUnique({ where: { email } });
    if (isUser) {
      throw new BadRequestException('Користувач з таким e-mail вже існує');
    }

    const hashedPassword = await this.hashPassword(password);
    await this.prisma.user.create({
      data: {
        email,
        firstName,
        surName,
        lastName,
        hashedPassword,
        phoneNumber,
      },
    });
    return { message: 'Ви успішно зареєструвались' };
  }

  async signIn(dto: SignInDto) {
    const { email, password } = dto;
    return `This action returns all auth`;
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePassword(args: { pass: string; hash: string }) {}
}
