function solution(n) {
  return "수박".repeat(Math.round(n / 2)).substring(0, n);
}

console.log(solution(3));

//<--------------Sol2--------------_>
//생각을 한 바퀴 더 굴려서 코드르 짜셧따,,
const waterMelon = (n) => {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};

//<---------------Sol3-----------------_>
//ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
function waterMelon2(n) {
  var result =
    "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박";

  return result.substring(0, n);
}
