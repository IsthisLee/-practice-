//목적 : 문제를 찍은 수포자들 간에 1등 구하기.
//규칙 : 수포자1은 1,2,3,4,5,.. 반복. 수포자2는 2,1,2,3,2,4,2,5,.. 반복, 수포자3은 3,3,1,1,2,2,4,4,5,5,..반복
//규칙 : 동점일 경우 오름차순 정렬.
//로직
//1. 수포자들이 찍은 것과 정답을 비교한다.
//2. 개수를 비교하여 가장 높은 사람 return.

//세부 로직
//1. 수포자들의 찍는 패턴을 변수에 지정.
//1-1. 수포자1은 12345 배열(5글자), 수포자2는 21232425란는 배열(8글자), 수포자3은 3311224455배열(10글자)
//2. 정답 개수에 따라 찍는 패턴을 몇 개 가져올지 구한다. - Math.ceil를 써보자.
//2-1. 정답이 13개일 경우 수포자1은 3개, 수포자2는 2개, 수포자3은 2개.
//3. 정답과 찍은 것을 비교한다. - for문을 돌려서 맞으면 count++ 하면 되겠지?
//4. 1등을 return한다.

function solution(answers) {
  const pattern1 = "12345";
  const pattern2 = "21232425";
  const pattern3 = "3311224455";
  let pattern1Score = checking(pattern1);
  let pattern2Score = checking(pattern2);
  let pattern3Score = checking(pattern3);
  let grade = grading(pattern1Score, pattern2Score, pattern3Score);

  function checking(pattern) {
    let count = 0;
    pattern = pattern
      .repeat(Math.ceil(answers.length / pattern.length))
      .split(""); // 2, 2-1번 로직
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === +pattern[i]) {
        count++;
      }
    }
    return count;
  }

  function grading(score1, score2, score3) {
    let king = [];
    let arr = [score1, score2, score3];
    arr.sort(function (a, b) {
      return b - a;
    });
    if (arr[0] === score1) king.push(1);
    if (arr[0] === score2) king.push(2);
    if (arr[0] === score3) king.push(3);
    return king;
  }
  return grade;
}

console.log(solution([1, 2, 3, 4, 5]));

//<---------------Sol2--------------->
//정답을 확인하는 로직이 훨씬 깔끔하다,,
function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}

//<----------------Sol3---------------->

function solution2(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
