import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// import { KakaoStrategy } from 'passport-kakao';
// import { NaverStrategy } from 'passport-naver';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  /** PassportStrategy(부모 클래스)
   * 1. 비밀번호 검증
   * 2. 만료 시간 검증
   *
   * 실패 시: Error
   * 성공 시: validate() 호출
   */
  constructor() {
    super({
      // jwtFromRequest: (req) => {
      //   const originToken: string = req.headers.authorization;
      //   const accessToken = originToken.toLowerCase().replace('bearer ', '');
      //   return accessToken;
      // },
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'temporary',
    });
  }

  validate(payload) {
    console.log('paylod: ', payload); // { sub: adfadf(유저 아이디) }

    return {
      id: payload.sub,
    };

    // return 시 아래와 같이 req.user에 저장됨
    // req.user = { id: payload.sub }
  }
}
