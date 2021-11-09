let s = "WhatThe";

function solution(s) {
  let a = Math.floor(s.length / 2);
  //Math.floor 메소드로 문자열 길이의 소수점을 버린다.
  // 정확히는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.

  if (s.length % 2 === 0) {
    a = s.substr(--a, 2); //substr 메소드로 원하는 문자열 가져옴.
  } else {
    a = s.substr(a, 1);
  }
  return a;
}

console.log(solution(s));
