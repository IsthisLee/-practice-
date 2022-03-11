//1. 증가 2. 감소 3. 증가 ... 반복
//짝수일 때는 증가로 끝, 홀수일 땐 감소로 끝.

//answer : 수열 s를 지그재그 수열로 만들기 위해 "추가해야 하는 수의 개수의 최솟값"

//min ( 포함 )과 max ( 포함 ) 사이 의 정수 난수를 반환
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    //증가 시기
    if (i % 2 == 0) {
      console.log("증가 시기", s[i], s[i + 1]);
      if (s[i] >= s[i + 1]) {
        let num = randomInteger(s[i] + 1, s[i + 1] + 1);
        s.splice(i + 1, 0, num);
        count++;
      }
    }
    //감소시기
    else {
      console.log("감소 시기", s[i], s[i + 1]);
      if (s[i] <= s[i + 1]) {
        let num = randomInteger(s[i] - 1, s[i + 1] - 1);
        s.splice(i + 1, 0, num);
        count++;
      }
    }
    console.log("s : ", s);
    console.log("count : ", count);
  }
  return count;
}

console.log(solution([3, -1, 0, 4, 4]));
