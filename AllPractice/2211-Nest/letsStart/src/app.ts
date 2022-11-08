import { Cat, CatType } from "app.model";
import * as express from "express";

const app: express.Express = express();

const port: number = 8080;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
