function solution(s) {
  return s.length === 4 || s.length === 6 ? (+s + "" === s ? true : false) : false;
}
console.log(solution("a234"));


//<-------------Sol2------------->
//정규표현식 뭐꼬,,
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }