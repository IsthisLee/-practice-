function solution(n) {
  let value = "";
  let answer = n.toString().split("");
  //한 자리 수끼리만 판별할거라서 그냥 sort()만 써도 됐었다.
  answer.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < answer.length; i++) {
    value += answer[i];
  }
  return 0 + value;
}

console.log(solution(118372));

//<----------------Sol2--------------->
// 나와 흐름은 같지만,
// 훨씬 간결하게.
function solution(n) {
  const newN = n + "";
  // + ""를 해서 문자열로 변환
  const newArr = newN.split("").sort().reverse().join("");
  //sort를 하면 유니코드 오름차순이 되는데 그걸 reverse()메소드로 뒤집고
  //join메소드를 통해서 배열 내 모든 문자열을 합쳐줬음.
  //join의 매개변수 ""는 합쳐지는 문자열 사이에 아무것도 붙지 않게 됨.
  //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return +newArr;
  // + 를 붙여서 문자열을 숫자로 변환해줬음
}

//<--------------Sol3----------------->
function solution(n) {
  return parseInt((n + "").split("").sort().reverse().join(""));
}
