arr = [1, 2, 3, 4];

function solution(arr) {
  let answer = 0;
  for (const arrs of arr) {
    answer = answer + arrs;
  }
  return answer / arr.length;
}

console.log(solution(arr));

//Sol2
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
