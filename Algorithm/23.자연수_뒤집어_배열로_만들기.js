function solution(n) {
  let answer = n + "";
  return answer
    .split("")
    .reverse()
    .map((tonum) => +tonum);
}

console.log(solution(12345));

//<--------------Sol2--------------->
//또 숫자풀이다... 지린다..
function solution(n) {
  // 문자풀이
  // return (n+"").split("").reverse().map(v => parseInt(v));

  // 숫자풀이
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
