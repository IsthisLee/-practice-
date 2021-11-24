const express = require("express");
const Goods = require("../schemas/Goods");

const router = express.Router();

//제품 목록 api
router.get("/goods", async (req, res, next) => {
  try {
    const { category } = req.query;
    const goods = await Goods.find({ category }).sort("-goodsId");
    res.json({ goods: goods });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//제품 상세 api
//:goodsId는 뭐냐. : 뒤에 숫자나 문자열 같은 특정값이 올텐데, 그 값을 이런 이름의 변수로 갖다 쓰겠다고 정의하는 것.
router.get("/goods/:goodsId", async (req, res) => {
  const { goodsId } = req.params;
  goods = await Goods.findOne({ goodsId: goodsId });
  res.json({ detail: goods });
});

//제품 등록 api
router.post("/goods", async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body; //ajax에서 받아오는 data

  isExist = await Goods.find({ goodsId });
  if (isExist.length == 0) {
    await Goods.create({ goodsId, name, thumbnailUrl, category, price });
  }
  res.send({ result: "success" });
});

module.exports = router;
