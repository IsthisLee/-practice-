// const express = require("express"); // 옛날 방식 => CommonJS 방식
import express from "express"; // 최신 방식 => ES6 방식(Module 방식)
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { CashService } from "./mvc/services/cash.service.js";
import { PointService } from "./mvc/controllers/services/point.service.js";
import { ProductService } from "./mvc/controllers/services/product.service.js";

const app = express();

// === 의존성 주입으로 발생하는 장점 ===

// 1. new 한번으로 모든 곳에서 재사용(싱글톤 패턴, 메모리 효율)
// 2. 의존성 주입으로 몽땅 한꺼번에 변경 가능
// 3. 의존성 주입으로 쿠폰 구매 방식을 포인트결제로 안전하게 변경 가능
//    => 메인 컨트롤러와 서비스 등은 그대로 두면서 
//       주입되는 객체만 변경하여 비지니스 로직(서비스)을 안전하게 변경 가능

// [부가설명]
// 1. ProductController가 CashService에 의존하고 있음.(CashSsrvice => 의존성)
//    => 이 상황을 "강하게 결합되어있다" 라고 표현
//    => tight-coupling

// 2. 이를 개선하기 위해서 "느슨한 결합"으로 변경할 필요가 있음.
//    => loose-coupling
//    => 이를 "의존성 주입(DI, Dependency-Injection)"으로 해결
//    => 이 역할을 대신 해주는 NestJS 기능: IoC Container (알아서 new 해서 넣어주는 애. 즉, DI 해줌)
//                                    => IOC: Inversion-of-Contril

// 3. "의존성주입"으로 "싱글톤패턴" 구현 가능해짐
//    => "의존성주입"이면, "싱글톤패턴"인가? => No!!
//    => "의존성주입"은 "싱글톤패턴"을 구현할 수 있는 방법 중 하나일 뿐임.
//    => new를 여러번 해서 주입하면 "싱글톤패턴"이 아님.
const productService = new ProductService();
const cashService = new CashService();
const pointService = new PointService();

// 상품 API
const productController = new ProductController(cashService, productService); // 의존성 주입(Dependency Injection) - Service 주입
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

// 쿠폰(상품권) API
const couponController = new CouponController(cashService);
app.post("/coupons/buy", couponController.buyCoupon); // 삼품권을 돈주고 구매하는 API

// 게시판 API
// app.get('/boards/...')

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
