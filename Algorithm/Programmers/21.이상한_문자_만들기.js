function solution(s) {
  return s.split(" ").map((str) => str.split("")).map((str)=>str.map((str,idx)=>idx%2 ? str.toLowerCase():str.toUpperCase()).join("")).join(" ");
}
console.log(solution("try hello world"));

//<---------------Sol2---------------->
// 근본풀이법
function solution3(s) {
  let answer = "";
  let index = 0;
  for (let str of s) {
    //한 글자씩 보기
    if (str === " ") {
      //띄어쓰면 index를 다시 0으로
      index = 0;
      answer += " ";
    } else {
      //아니면 대문자/소문자로 바꿈
      answer += index % 2 ? str.toLowerCase() : str.toUpperCase();
      index++; //index도 올림
    }
  }
  return answer;
}

//<-----------------Sol3---------------->
console.log(solution3("try hello world"));

function solution2(s) {
  let arr = s.split(" ");
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let words = arr[i]
      .split("")
      .map((word, idx) => {
        if (idx % 2 === 0) {
          return word.toUpperCase();
        } else if (word % 2 !== 0) {
          return word.toLowerCase();
        }
      })
      .join("");

    result.push(words);
  }

  return result.join(" ");
}
console.log(solution2("try hello world"));

//<--------------Sol3----------------->
//slice 메소드
//slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
// -1은 뒤에서 첫번째 오호라.
function toWeirdCase(s){
  var result = "";

  for(var word of s.split(" ")) {
    for(var i in word) {
      result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
    }
    result += " ";
  };

  return result.slice(0, -1);
}

//<---------------Sol4---------------_>
//나와 비슷하지만 좀 다름
function toWeirdCase(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}