//[자연수 뒤집어 더하기]
//입력 : 100,000,000 이하의 자연수
//출력 : 각 자릿수를 뒤집어서 더하는 과정과 값이 담긴 수식을 문자열로 출력
//로직 :
//1. 자연수를 문자열로 바꾼 후 나눠준다.
//2. 반전된 각 자릿수를 더하는 수식을 문자열로 만든다.(map을 이용해서 접근)
//3. 각 자릿수를 더한 값을 구한다.
//4. 수식과 결과값을 더한 문자열을 return.
const n = 100000000;

function solution(n) {
  let request = baseStr(n);
  let reverseNum = reverse(request);
  let value = sum(request);

  function baseStr(num) {
    num = num + "";
    num = num.split("");
    return num;
  }

  function reverse(num) {
    let sum = "";
    num = num.reverse().map((str) => (sum = sum + str + "+"));
    return sum.slice(0, -1);
  }

  function sum(num) {
    let sum = 0;
    num = num.map((str) => Number(str)).map((num) => (sum = sum + num));
    return sum;
  }

  return `${reverseNum}=${value}`;
}

console.log(solution(n));
