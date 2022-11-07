//로봇은 상, 하, 좌우로 한 칸씩 이동할 수 있으며,
//이동하는데 1만큼의 전력을 소모하고,
//장애물 1개를 제거하는데 c만큼의 전력을 소모한다.

//answer : 로봇이 목적지까지 도달하는데 필요한 최소 전력량

//sol1. 장애물을 뚫고 목적지 도달.
//sol2. 장애물을 피해서 목적지 도달.
//sol3. sol1 + sol2 융합하여 목적지 도달.
//모든 경우의 수를 통해서 목적지로 가야 최소 전력량을 알 수 있지 않나?
//로봇이 상하좌우 모든 방향으로 움직이게 해야 할 듯.
//-> 어케 해야할지 모르겠다!!!!!!!!
//BFS랑 큐로 최단거리 풀어야 한다??

//파악해야 할 요소 : 목적지의 배열, 인덱스

//바로 가는 거리 구하는 방법 : 배열 차이 + 인덱스 차이

//로봇 배열, 인덱스 구하는 함수
function robotInfo(board) {
  let robotArr, robotIndex;
  let count = 0;
  board.forEach((a) => {
    if (a.includes(2)) {
      robotArr = count;
    }
    count++;
  });
  robotIndex = board[robotArr].indexOf(2);

  return { robotArr, robotIndex };
}

//목적지 배열, 인덱스 구하는 함수
function destInfo(board) {
  let destArr, destIndex;
  let count = 0;
  board.forEach((a) => {
    if (a.includes(3)) {
      destArr = count;
    }
    count++;
  });
  destIndex = board[destArr].indexOf(3);

  return { destArr, destIndex };
}

//최소 전력 구하는 함수
function straight(board, cost) {
  const { robotArr, robotIndex } = robotInfo(board);
  const { destArr, destIndex } = destInfo(board);
  const now = {
    Arr: robotArr,
    Index: robotIndex,
    power: 0,
  };

  while (now.Arr === destArr && now.Index === destIndex) {}
}

function solution(board, cost) {
  straight(board, cost);
  return 0;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 3, 0, 0, 0, 1, 0],
    ],
    1
  )
);
