let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = new Array(); //굳이 메소드를 사용하지 않아도 됐었다. new Array() 대신 []만 입력해도 된다.
    for (let k = 0; k < arr1[i].length; k++) {
      answer[i][k] = arr1[i][k] + arr2[i][k];
    }
  }
  return answer;
}

console.log(solution(arr1, arr2));

//<------------Sol2--------------->
//화살표 함수랑 map,,,,,, 뭐냐 이거,,,,,

function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}

console.log(sumMatrix(arr1, arr2));

//<-------------위에랑 같은거임----------------->
function sumMatrix(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
console.log(sumMatrix(arr1, arr2));

//<---------------Sol3---------------->
//나랑 비슷한 방식인데 좀 더 깔끔함.

function solution(arr1, arr2) {
  var answer = [[]];
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

console.log(solution(arr1, arr2));
