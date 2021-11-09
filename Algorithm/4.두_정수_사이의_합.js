function solution(a, b) {
  let answer;
  if (a >= b) {
    answer = b;
    for (let i = b + 1; i <= a; i++) {
      answer += i;
    }
  } else {
    answer = a;
    for (let j = a + 1; j <= b; j++) {
      answer += j;
    }
  }
  return answer;
}

console.log(solution(5, 3));

//a 랑 b랑 뭐가 더 큰지 확인
// a가 더 작다? b가 될 때까지 더해 for문 통해서 i로 더해도 될 듯
// b가 더 작다? a가 될 때까지 더해
// 같다? 아무거나 반환

//<------------Sol2------------>
//가우스 응용 -> 양 끝의 합 * 양 끝의 합 갯수 ㄷ ㄷ
//와우,,
//Math 메소드 좀 공부해야겠다.

function adder(a, b) {
  var result = 0;

  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
console.log(adder(3, 5));

//<-------------Sol3------------->
function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

console.log(adder(3, 5));
