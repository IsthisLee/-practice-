import { CashService } from "./services/cash.service.js";

export class CouponController {
  cashService;

  constructor(cashService) {
    this.cashService = cashService; // -> 의존성 주입 -> 느슨한 결합(lose-coupling)
  }

  buyCoupon = (req, res) => {
    // 1. 가진 돈 검증하는 코드 (대략 10줄 -> 가져다 사용해서 2줄)
    // const cashService = new CashService(); // -> 강한 결합(tight-coupling)
    const hasMoney = this.cashService.checkValue();

    // 2. 상품권 구매하는 코드
    if (hasMoney) {
      res.send("상품권 구매 완료");
    }
  };
}
