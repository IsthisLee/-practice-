import coolsms from "coolsms-node-sdk";

const mysms = coolsms.default;

export function checkPhone(myphone) {
  //1. 휴대폰 번호 자릿수 맞는지 확인하기(10-11자리)
  if ((myphone && myphone.length < 10) || (myphone && myphone.length > 11)) {
    console.log("에러 발생!!! 휴대폰 번호를 제대로 입력해주세요.");
    return false;
  } else {
    return true;
  }
}

//2. 인증번호 6자리 만들기
export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

//3. 핸드폰 번호에 토큰 전송하기
export async function sendTokenToSMS(myphone, token) {
  const messageService = new mysms(process.env.SMS_KEY, process.env.SMS_SECRET);
  const result = await messageService.sendOne({
    to: myphone,
    from: process.env.SMS_SENDER,
    text: `[이거니] 안녕하세요? 요청하신 인증번호는 [${token}] 입니다.`
  });

  console.log(result);

  // console.log(myphone + "번호로 인증번호" + result + "를 전송합니다.");
}
