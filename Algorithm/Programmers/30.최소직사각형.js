//목적 :
//로직
//1. 모든 길이 중에 가장 긴 거 하나 고름(가로)
//2. 각각의 카드 중 짧은 것만 가지고 배열 하나 생성
//3. 2반에서 만든 배열 중 가장 긴 값을 세로로 지정
//4. 가로 * 세로값 return

function solution(sizes) {
  let width = getWidth(sizes);
  let height = getHeight(sizes);

  function getWidth(size) {
    return Number(
      size
        .join()
        .split(",")
        .sort(function (a, b) {
          return b - a;
        })[0]
    );
  }

  function getHeight(size) {
    let heights = [];
    for (let out of size) {
      heights.push(
        out.sort(function (a, b) {
          return b - a;
        })[1]
      );
    }
    heights.sort(function (a, b) {
      return b - a;
    });
    return heights[0];
  }
  return width * height;
}

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);

//<------------Sol2------------->
//forEach라는 메소드 사용,,
function solution2(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}

//<--------------Sol3----------------->
function solution3(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}