import { Cat, CatType } from "./cats/cats.model";
import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();

const port: number = 8080;

//* 모든 라우터에 적용되는 미들웨어
app.use((req, res, next) => {
  console.log("this is logging middleware for all routes");

  next();
});

//* 해당하는 라우터에만 적용되는 미들웨어
app.use("/", (req, res, next) => {
  console.log("this is logging middleware for specific route");

  next();
});

//* (추가) 이처럼 함수를 통해 모듈화해서 사용할 수도 있겠죠?
const moduleMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("this is module middleware");

  next();
};

//* json parsing middleware
app.use(express.json());

//* 분리한(모듈화된) Router 사용
app.use(catsRouter);

//* 404 Middleware
app.get("/*", (req, res, next) => {
  console.log("this is error middlware");

  res.status(404).send("404 not found error");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
