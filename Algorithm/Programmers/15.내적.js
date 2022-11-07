let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];

function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

console.log(solution(a, b));

//Sol2.
//Reduce 사용. 나도 공부해서 내일부터는 꼭 Reduce 사용 해봐야겠다..
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
