function createTokenOfPhone(phoneNumber, tokenLength = 6) {
  // 1. 휴대폰 자릿수 맞는지 확인
  if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
    console.log("에러 발생! 휴대폰 번호를 제대로 입력해 주세요.");
    return;
  }

  // 2. 핸드폰 토큰 6자리 생성
  if (tokenLength === undefined) {
    console.log("에러 발생! 갯수를 제대로 입력해 주세요.");
    return;
  } else if (tokenLength < 0) {
    console.log("에러 발생! 0 이상의 숫자를 입력해 주세요.");
    return;
  } else if (tokenLength > 10) {
    console.log("에러 발생! 10 이하의 숫자를 입력해 주세요.");
    return;
  }

  const result = String(Math.floor(Math.random() * 10 ** tokenLength)).padStart(
    tokenLength,
    "0"
  );

  // 3. 핸드폰번호에 토큰 전송
  console.log(phoneNumber + "번호로 인증번호" + result + "를 전송했습니다.");
}

createTokenOfPhone("01012345678");
