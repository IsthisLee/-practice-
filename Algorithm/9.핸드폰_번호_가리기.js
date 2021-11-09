let phone_number = "01022224444";

function solution(phone_number) {
  let answer = "";
  let split = phone_number.length - 4;
  let behindNumber = phone_number.substring(0, split); //substring 메소드로 a 부터 b 까지 가져옴
  let openNumber = phone_number.substring(split, phone_number.length); // //
  for (let i = 0; i < behindNumber.length; i++) {
    answer = answer + "*";
  }
  return answer + openNumber;
}

console.log(solution(phone_number));

//Sol2
//.repeat 과 .slice 메소드 이용했음

function hide_numbers(phone_number) {
  var result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);

  return result;
}

console.log(hide_numbers(phone_number));

//Sol3
//정규식으로 해결
//.replace 메소드 사용

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers("01022224444"));
