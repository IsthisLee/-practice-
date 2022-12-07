import { Router } from "express";
import {
  updatePartialCat,
  createCat,
  deleteCat,
  readAllCats,
  readCat,
  updateCat
} from "./cats.service";

const router = Router();

//* READ 고양이 전체 데이터 조회 api -> GET request
router.get("/cats", readAllCats);

//* READ 특정 고양이 데이터 조회 api -> GET request
router.get("/cats/:id", readCat);

//* CREATE 새로운 고양이 추가 api -> POST request
router.post("/cats", createCat);

//* UPDATE 고양이 데이터 업데이트 -> PUT request
router.put("/cats/:id", updateCat);

//* UPDATE 고양이 데이터 부분 업데이트 -> PATCH request
router.patch("/cats/:id", updatePartialCat);

//* DELETE 고양이 데이터 삭제 -> DELETE request
router.delete("/cats/:id", deleteCat);

export default router;
