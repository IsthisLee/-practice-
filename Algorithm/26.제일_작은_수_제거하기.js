function solution(arr) {
  let index = [...arr];
  let min = arr.sort(function (a, b) {
    return a - b;
  })[0];
  for (let i = 0; i < arr.length; i++) {
    if (index[i] === min) {
      index.splice(i, 1);
      return index.length !== 0 ? index : [-1];
    }
  }
}

console.log(solution([1232, 123, 4435, 21]));

//<----------------Sol2---------------_>
//Math.min이라는 메소드가 있네,,
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
