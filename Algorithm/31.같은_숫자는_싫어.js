function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(solution([4, 4, 4, 3, 3, 3, 3, 3, 3, 3]));

//<--------------Sol2---------------->
//배열에 값을 추가하는 방식
//내가 짠 코드는 효율성 테스트 실패고
// 이 코드는 효율성 테스트 성공이다. 쉣,,
function solution2(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

console.log(solution2([4, 4, 4, 3, 3, 3, 3, 3, 3, 3]));

//<----------------Sol2-----------------_>
//filter 메소드 사용
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
