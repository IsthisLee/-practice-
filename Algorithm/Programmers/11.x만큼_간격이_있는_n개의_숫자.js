function solution(x, n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(x * (i + 1));
  }
  return answer;
}

console.log(solution(2, 5));

//<-------------Sol2---------------->
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
