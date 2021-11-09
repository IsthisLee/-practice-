function solution(seoul) {
  let answer = "";
  for (let i = 0; seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answer = `김서방은 ${seoul.indexOf("Kim")}에 있다`;
      return answer;
    }
  }
}

console.log(solution(["Jane", "Geonhee", "Kim"]));

//<-------------Sol2--------------->
//내가 너무 쓸데없이 길고 복잡하게 했었네(괴상한 짬뽕코드로 짜버렸다ㅎㄸ),,
//에초에 for문을 돌렸기에 나는 indexOf도 쓸 필요가 없었는데(i값 받아오면 되니까,,)
//for문을 쓰던가 indexOf로 한 번에 깔끔하게 가져오던가,, 했어야 했는데;;
//작동한다고 그냥 무지성 제출하지 말고 한 번 더 확인 좀 해야겠다.

function findKim(seoul) {
  var idx = seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}
console.log(findKim(["Queen", "Tod", "Kim"]));
