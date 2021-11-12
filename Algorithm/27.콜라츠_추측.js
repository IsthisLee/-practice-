function solution(num) {
  let answer = 0;
  while (num !== 1 && answer != 501) {
    num = num % 2 ? num * 3 + 1 : num / 2;
    answer++;
  }
  return answer !== 501 ? answer : -1;
}

console.log(solution(626331));

//<--------------Sol2---------------->
function collatz(num, count = 0) {
  return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}

console.log(collatz(6));

//<-------------Sol3------------->
const solution2 = (num) => collatzGuessCount(num, 0);

const collatzGuessCount = (num, acc) => 
  (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);

const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);