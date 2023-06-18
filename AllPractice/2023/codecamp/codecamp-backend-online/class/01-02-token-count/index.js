function getToken(valLength) {
  if (valLength === undefined) {
    console.log("에러 발생! 갯수를 제대로 입력해 주세요.");
    return;
  } else if (valLength < 0) {
    console.log("에러 발생! 0 이상의 숫자를 입력해 주세요.");
    return;
  } else if (valLength > 10) {
    console.log("에러 발생! 10 이하의 숫자를 입력해 주세요.");
    return;
  }

  const result = String(Math.floor(Math.random() * 10 ** valLength)).padStart(
    valLength,
    "0"
  );

  return result;
}

console.log(getToken(8));
