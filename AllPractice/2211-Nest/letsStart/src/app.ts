import * as express from "express";

const app: express.Express = express();

const port: number = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ name: "Geonhee Lee", age: 23, friends: ["gh", "ys", "ss"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
