function solution(x) {
  let sum = 0;
  for (const a of (x + "").split("")) {
    sum += Number(a);
  }
  return x % sum ? false : true;
}

console.log(solution(13));

//<----------Sol2------------->
//숫자 계산 (속도 우선)
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}

//<--------------Sol3-------------->
function Harshad(n){
    return !(n%(n+'').split('').reduce(function (i, sum) {return +sum + +i;}));
  }

//<--------------Sol4--------------->
function Harshad(n){
    return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
  }