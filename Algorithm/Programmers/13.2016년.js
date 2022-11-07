function solution(a, b) {
  let weeks = [];
  let arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let monthDays = 0;
  for (let i = 0; i < Math.ceil(366 / 7); i++) {
    weeks.push(["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]);
  }
  for (let j = 0; j < a - 1; j++) {
    monthDays = monthDays + arr[j];
  }
  let day = monthDays + b;
  let week = Math.floor(day / 7) - 1;
  if (week == -1) {
    week = 0;
  }
  day = ((monthDays + b) % 7) - 1;
  if (day == -1) {
    day = 6;
  }
  return weeks[week][day];
}

// 위에서는 쓸데없이 몇 주차인 것까지 구해버렸다.
// 필요한 것은 몇 요일인지만 구하면 되는 것인데,,,,,,,
// 나의 불찰이다!!!!!!!!
function solution(a, b) {
  let weeks = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let monthDays = 0;
  let day;
  for (let j = 0; j < a - 1; j++) {
    monthDays = monthDays + arr[j];
  }
  day = ((monthDays + b) % 7) - 1;
  if (day == -1) {
    day = 6;
  }
  return weeks[day];
}

console.log(solution(1, 4));

//<---------------Sol2--------------->
//getDay() 메서드는 주어진 날짜의 현지 시간 기준 요일을 반환합니다. 0은 일요일을 나타냅니다.

//new Date(`2016/${a}/${b}`)
//=> 2016년 a월 b일 n요일 //getDay()
//=> 요일을 0(일요일)~6(토요일) 숫자로 변환
//후에 해당day index값 return
function solution2(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return day[new Date(`2016/${a}/${b}`).getDay()];
}

console.log(solution2(1, 4));

//<==================Sol3====================>
//slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
//toUpperCase() 메서드는 문자열을 대문자로 변환해 반환합니다.
function getDayName(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

console.log(getDayName(1, 4));
