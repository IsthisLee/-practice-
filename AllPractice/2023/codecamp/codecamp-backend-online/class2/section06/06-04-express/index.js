// const express = require("express"); // 옛날 방식 => CommonJS 방식
import express from "express"; // 최신 방식 => ES6 방식(Module 방식)

const app = express();

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
  // 1. 가진 돈 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  //
  // 2. 판매여부 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  //
  // 3. 상품 구매하는 코드
  // if (돈 있음 && !판매완료) {
  //   res.send("상품 구매 성공!!");
  // }
});

// 상품 환불하기 API
app.post("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  //
  // 2. 상품 환불하는 코드
  // if (판매완료) {
  //   res.send("상품 환불 완료!!");
  // }
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
