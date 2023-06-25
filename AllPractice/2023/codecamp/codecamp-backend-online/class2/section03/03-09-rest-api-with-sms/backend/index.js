import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get(
  "/boards",
  function (req, res) {
    //1.DB에 접속 후, 데이터를 조회. 조회한 데이터를 객체로 담아온다.
    const result = [
      {
        number: 1,
        writer: "철수",
        title: "제목입니다.",
        contents: "내용이에요."
      },
      {
        number: 2,
        writer: "영희",
        title: "제목입니다.",
        contents: "내용이에요."
      },
      {
        number: 3,
        writer: "훈이",
        title: "제목입니다.",
        contents: "내용이에요."
      }
    ];
    //2.DB에서 꺼내온 결과를 브라우저에 응답(response)으로 주기
    res.send(result);
  },
  function (req, res) {}
);

app.post("/boards", function (req, res) {
  //1. 브라우저에서 보내준 데이터 확인하기
  console.log(req);
  console.log("=====");
  console.log(req.body);

  //2. DB에 접속 후, 브라우저에서 받은 데이터를 디비에 저장해야 함.

  //3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.");
});

app.post("/tokens/phone", function (req, res) {
  console.log(req.body);
  const myphone = req.body.myphone;
  //1. 휴대폰번호 자릿수 맞는지 확인 (10-11자리)
  const isValid = checkPhone(myphone);
  if (isValid === false) return;
  //2. 핸드폰 토큰 6자리 만들기
  const myToken = getToken();
  //3. 핸드폰 번호에 토큰 전송하기
  sendTokenToSMS(myphone, myToken);

  res.send("인증완료!!!");
});

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행중입니다.");
});
