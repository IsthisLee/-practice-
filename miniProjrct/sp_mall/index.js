const express = require("express");
const app = express();
const port = 3000;

//분리한 schemas파일 연결(mongodb 연동 파일, schema 파일)
const connect = require("./schemas");
connect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//const goodsRouter = require("./routes/goods");
//const userRouter = require("./routes/user");

const goodsRouter = require("./routers/goods");
app.use("/api", [goodsRouter]);

// app.use("/goods", goodsRouter);
// app.use("/user", userRouter);

//Middleware
app.use((req, res, next) => {
  console.log(req);
  next();
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/test", (req, res) => {
  let name = req.query.name;
  res.render("test", { name });
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/detail", (req, res) => {
  res.render("detail");
});
// app.get("/goods/list", (req, res) => {
//   res.send("상품 목록 페이지");
// });

// app.get("/goods/detail", (req, res) => {
//   res.send("상품 상세 페이지");
// });

// app.get("/user/login", (req, res) => {
//   res.send("로그인 페이지");
// });

// app.get("/user/register", (req, res) => {
//   res.send("회원가입 페이지");
// });

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
