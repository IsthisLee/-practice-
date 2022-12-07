import { Cat } from "./cats.model";
import { Router } from "express";

const router = Router();

//* READ 고양이 전체 데이터 조회 api -> GET request
router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: { cats }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message
    });
  }
});

//* READ 특정 고양이 데이터 조회 api -> GET request
router.get("/cats/:id", (req, res) => {
  try {
    const { id } = req.params;
    const cat = Cat.find((cat) => cat.id === id);

    res.status(200).send({
      success: true,
      data: { cat }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message
    });
  }
});

//* CREATE 새로운 고양이 추가 api -> POST request
router.post("/cats", (req, res) => {
  try {
    const data = req.body;

    Cat.push(data); // create a new cat

    res.json({
      success: true,
      data: { cats: Cat }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message
    });
  }
});

//* UPDATE 고양이 데이터 업데이트 -> PUT request
router.put("/cats/:id", (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === id) {
        cat = body;
        result = cat;
      }
    });

    res.status(201).send({
      success: true,
      data: {
        cat: result
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message
    });
  }
});

//* UPDATE 고양이 데이터 부분 업데이트 -> PATCH request
router.patch("/cats/:id", (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    res.status(201).send({
      success: true,
      data: {
        cat: result
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message
    });
  }
});

//* DELETE 고양이 데이터 삭제 -> DELETE request
router.delete("/cats/:id", (req, res) => {
  try {
    const { id } = req.params;
    const newCat = Cat.filter((cat) => cat.id !== id);

    res.status(201).send({
      success: true,
      data: {
        cats: newCat
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message
    });
  }
});

export default router;
