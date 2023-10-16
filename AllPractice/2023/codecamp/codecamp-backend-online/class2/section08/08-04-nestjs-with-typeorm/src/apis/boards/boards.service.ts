import { Injectable, Scope } from '@nestjs/common';

// 인젝션-스코프: 기본값(DEFAULT)은 '싱글톤'이다.
// -> 즉, @Injectable 붙이지 않아도 되긴 히고, 그러면 싱글톤이다.
// -> REQUEST 스코프는 매 요청마다 새로운 인스턴스(new)를 생성한다.
// -> TRANSIENT 스코프는 수시로(의존이 필요할 때마다, 매 주입마다) 새로운 인스턴스(new)를 생성한다.
@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  getHello(): string {
    return 'Hello World!';
  }
}
