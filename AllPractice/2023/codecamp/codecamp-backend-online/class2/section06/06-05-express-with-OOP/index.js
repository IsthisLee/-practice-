// const express = require("express"); // 옛날 방식 => CommonJS 방식
import express from "express"; // 최신 방식 => ES6 방식(Module 방식)
import { CashService } from "./cash.js";
import { ProductService } from "./product.js";

const app = express();

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
  // 1. 가진 돈 검증하는 코드 (대략 10줄 => 2줄로 줄임)
  const cashService = new CashService();
  const hasMoney = cashService.checkValue();

  // 2. 판매여부 검증하는 코드 (대략 10줄 => 2줄로 줄임)
  const productService = new ProductService();
  const isSoldout = productService.checkSoldout();

  // 3. 상품 구매하는 코드
  if (hasMoney && !isSoldout) {
    res.send("상품 구매 성공!!");
  }
});

// 상품 환불하기 API
app.post("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드 (대략 10줄 => 2줄로 줄임)
  const productService = new ProductService();
  const isSoldout = productService.checkSoldout();

  // 2. 상품 환불하는 코드
  if (isSoldout) {
    res.send("상품 환불 완료!!");
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
