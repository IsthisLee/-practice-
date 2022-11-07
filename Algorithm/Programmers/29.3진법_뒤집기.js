function solution(n) {
  let notation3 = n.toString(3).split("").reverse().join("");
  return parseInt(notation3, 3);
}

console.log(solution(125));

//<-------------Sol2--------------->
//https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=jamogenius&logNo=220893891970
//위 url은 진법 변환하는 방법
function solution(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}
