let s = "WhatThe";
//Math.floor 메소드로 문자열 길이의 소수점을 버린다.
// 정확히는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
function solution(s) {
  let a = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    a = s.substr(--a, 2); //substr 메소드로 원하는 문자열 가져옴.
  } else {
    a = s.substr(a, 1);
  }
  return a;
}

console.log(solution(s));

//substr() 메소드는 이제 쓰면 안된다고 해서 대체한 코드
function solution(s) {
  let a = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    a = s.substring(--a, a + 2); //substr 메소드로 원하는 문자열 가져옴.
  } else {
    a = s.substring(a, a + 1);
  }
  return a;
}
