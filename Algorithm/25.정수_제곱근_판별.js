function solution(n) {
  for (let i = 0; i * i < 500000000000000; i++) {
    if (i * i === n) return (i + 1) * (i + 1);
    if (i * i >= 50000000000000) return -1;
  }
}

console.log(solution(121));

//<------------Sol2------------->
function solution(n) {
  var result = 0;
  var x = 0;
  while (x * x < n) {
    x++;
  }
  if (x * x == n) {
    x++;
    result = x * x;
  } else {
    result = -1;
  }

  return result;
}

// 제곱근을 구해주는 메소드
Math.sqrt();
