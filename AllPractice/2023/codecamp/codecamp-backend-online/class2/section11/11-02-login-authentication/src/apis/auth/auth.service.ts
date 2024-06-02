import { UsersService } from './../users/users.service';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
} from './interfaces/auth-service.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
    private readonly usersService: UsersService,
  ) {}

  async login({ email, password }: IAuthServiceLogin): Promise<string> {
    // 1. 이메일이 일치하는 유저를 DB에서 찾기
    const user = await this.usersService.findOneByEmail({ email });

    // 2. 유저가 없으면 에러 발생
    if (!user)
      throw new UnprocessableEntityException('Invalid email or password');

    // 3. 일치하는 유저가 있지만, 비밀번호가 일치하지 않으면 에러 발생
    const isAuthenticated = await bcrypt.compare(password, user.password);

    if (!isAuthenticated)
      throw new UnprocessableEntityException('Invalid email or password');

    // 4. 일치하는 유저 O, 비밀번호 일치 O
    //    => accessToken(=JWT)를 발급하여 부라우저에 전달
    return this.getAccessToken({ user });
  }

  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.id },
      { secret: 'temporary', expiresIn: '1h' },
    );
  }
}
