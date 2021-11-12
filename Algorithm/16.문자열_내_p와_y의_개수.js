function solution(s) {
  let answer;
  s = s.toUpperCase();
  let pcount = 0;
  let jcount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P") {
      pcount++;
    }
    if (s[i] === "Y") {
      jcount++;
    }
  }
  if (jcount === pcount) {
    answer = true;
  } else answer = false;
  return answer;
}

console.log(solution("pPPoiilkoyYy"));

//<---------------Sol2-------------->
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

//<-------------Sol3--------------->
//프로그래머스에선 안된다.... 뭐지
// 여기서 얻어갈 것은
// Match라는 메소드와
//gi라는 정규식이다 ( + ?). 정규 표현식은 regular expression을 검색해보자.
//일단 여기서 i는 대소문자 상관없이 g를 찾으라는 것이다.
const solution2 = (s) => s.match(/p/gi)?.length === s.match(/y/gi)?.length;
console.log(solution2("pPPoiilkoyYy"));
