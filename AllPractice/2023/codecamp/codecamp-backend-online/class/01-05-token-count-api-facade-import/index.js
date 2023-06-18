import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";

// 메인 함수
function createTokenOfPhone(myPhone, count) {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myPhone);
  if (isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
    const myToken = getToken(count);

    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myPhone, myToken);
  }
}

createTokenOfPhone("01012345678", 8);
