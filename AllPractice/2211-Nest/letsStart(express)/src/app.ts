import * as express from "express";
import catsRouter from "./cats/cats.route";

// 싱글톤 디자인 패턴 적용
class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  // 라우터가 추가될 경우(cat 외에) 편의 및 가독성을 위해 따로 분리
  private setRoute() {
    //* 분리한(모듈화된) Router 사용
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //* 모든 라우터에 적용되는 미들웨어
    this.app.use((req, res, next) => {
      console.log("this is logging middleware for all routes");
      console.log("also, this is logging middleware");

      next();
    });

    //* 해당하는 라우터에만 적용되는 미들웨어
    this.app.use("/", (req, res, next) => {
      console.log("this is logging middleware for specific route");

      next();
    });

    //* json parsing middleware
    this.app.use(express.json());

    this.setRoute();

    //* 404 Middleware
    this.app.get("/*", (req, res, next) => {
      console.log("this is error middlware");

      res.status(404).send("404 not found error");
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
  }

  public listen(port: number) {
    this.setMiddleware();
    this.app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
}

const init = () => {
  const server = new Server();
  server.listen(8080);
};

init();
