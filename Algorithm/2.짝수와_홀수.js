let num = 424;

function solution(num) {
  let answer;
  if (num % 2 === 0) {
    answer = "Even";
  } else answer = "Odd";
  return answer;
}

console.log(solution(num));

// Solution 2
//ToKnow : 삼항연산자
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));
