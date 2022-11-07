function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));

//<----------------Sol2-------------->
//pop()이라는 메소드도 있다.
//pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
//하나 배워간다.
const solution = (p, c) => {
  p.sort();
  c.sort();
  while (p.length) {
    let pp = p.pop();
    if (pp !== c.pop()) return pp;
  }
};
