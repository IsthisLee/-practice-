numbers = [1, 2, 3, 4, 6, 7, 8, 0]; //14

function solution(numbers) {
  let answer = 0;
  let summary = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer = answer + numbers[i];
    console.log(answer);
  }
  for (let i = 0; i < 10; i++) {
    summary = summary + i;
  }
  return summary - answer;
}

console.log(solution(numbers));

// Sol.2
function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(solution(numbers));

// Sol.3
// 등차수열의 합 사용해서 0~9 합 계산
// n(n+1)/2
// 그 후 reduce 메소드를 사용하여 numbers 배열 내에 있는 리스트 전체 합 구하기.
function solution(numbers) {
  return (9 * (9 + 1)) / 2 - numbers.reduce((cur, acc) => cur + acc, 0);
}
console.log(solution(numbers));
