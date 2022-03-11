function solution(n) {
  let num = [...new Set(n.toString().split(""))]; //각 유니크 숫자 구하기
  let answer = 0; //나누어 떨어지는 횟수
  //각각 나누어 떨어지는지 구하기
  num.forEach((a) => {
    if (n % a == 0) {
      answer++;
    }
  });

  return answer;
}

console.log(solution(1234));
