function solution(n) {
  let answer = n + "";
  let sum = 0;
  return answer.split("").map((summary) => (sum = +summary + sum))[
    answer.length - 1
  ];
}

console.log(solution(987));

//<--------------Sol2------------->
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}

//<------------Sol3------------>
//숫자풀이 레전드.,,,,
//어케 생각해냈지?? 수학 천재이신듯?
function solution(n) {
  var sum = 0;

  do {
    sum += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);

  return sum;
}
