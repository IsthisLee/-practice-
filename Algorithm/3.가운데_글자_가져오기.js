let s = "WhatThe";

function solution(s) {
  let a = Math.floor(s.length / 2); //Math.floor 메소드로 문자열 길이의 소수점을 버린다.
  if (s.length % 2 === 0) {
    a = s.substr(--a, 2); //substr 메소드로 원하는 문자열 가져옴.
  } else {
    a = s.substr(a, 1);
  }
  return a;
}

console.log(solution(s));
