absolutes = [4, 7, 12];
signs = [true, false, true];

function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      answer = answer + absolutes[i];
    } else answer = answer - absolutes[i];
  }
  return answer;
}

console.log(solution(absolutes, signs));

//Sol2
// Reduce ,, 나도 써야겠다
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

//Sol3
//삼안연산자
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}
