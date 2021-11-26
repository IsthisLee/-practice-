const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const authMiddleware = require("./middlewares/auth-middleware");

mongoose.connect("mongodb://localhost/shopping-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

//회원가입 API
router.post("/users", async (req, res) => {
  const { nickname, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.status(400).send({
      errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
    });
    return;
  }

  const existUsers = await User.find({
    $or: [{ email }, { nickname }],
  });
  if (existUsers.length) {
    res.status(400).send({
      errorMessage: "이미 가입된 이메일 또는 닉네임이 있습니다.",
    });
    return;
  }

  const user = new User({ email, nickname, password });
  await user.save();

  res.status(201).send({});
});

//로그인 API
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password }).exec();

  if (!user) {
    res.status(400).send({
      errorMessage: "이메일 또는 패스워드가 잘못됐습니다.",
    });
    return;
  }

  const token = jwt.sign({ userId: user.userId }, "my-secret-key0");
  res.send({
    token,
  });
});

//유저 정보 조회 API
router.get("/users/me", authMiddleware, async (req, res) => {
  const { user } = res.locals;
  res.send({ user });
});

app.use("/api", express.urlencoded({ extended: false }), router); //HTTP Request에서 Body에 담긴 Form(URL Encoded) 형식의 데이터를 express 서버에서 사용할 수 있게 해주는 미들웨어.
app.use(express.static("assets")); //path에 입력한 경로에 있는 파일을 그대로 서빙해주는 기능을 수행하는 미들웨어. router의 기능을 일부 가지고 있는것.

app.listen(8080, () => {
  console.log("서버가 요청을 받을 준비가 됐어요");
});
