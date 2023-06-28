import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { Board } from "./models/board.model.js";

import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateToEmail
} from "./email.js";

const app = express();

app.use(express.json()); // 옛날에는 bodyParser 사용
app.use(cors());

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/boards", async (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  // const result = [
  //   { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요@@@" },
  //   { number: 2, writer: "영희", title: "영희 제목입니다~~", contents: "영희 내용이에요@@@" },
  //   { number: 3, writer: "훈이", title: "훈이 제목입니다~~", contents: "훈이 내용이에요@@@" },
  // ]
  const result = await Board.find();

  //2.DB에서 꺼내온 결과를 브라우저에 응답(response)으로 주기
  res.send(result);
});

app.post("/boards", async (req, res) => {
  //1. 브라우저에서 보내준 데이터 확인하기
  console.log(req);
  console.log("=========================");
  console.log(req.body);

  //2. DB에 접속 후, 브라우저에서 받은 데이터를 디비에 저장해야 함.
  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents
  });
  await board.save();

  //3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.");
});

app.post("/tokens/phone", function (req, res) {
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

app.post("/users", (req, res) => {
  const { name, age, school, email } = req.body;

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkValidationEmail(email);
  if (isValid === false) return;

  // 2. 가입환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({ name, age, school });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail(email, myTemplate);
  res.send("가입완료!!!");
});

mongoose
  .connect("mongodb://my-database:27017/mydocker") // docker-compose.yml에 설정한 컨테이너 이름인 my-database를 입력
  // -> docker-compose로 실행하면 docker들끼리 그룹핑이 되고 연결이 되어있음(이름으로). 따라서 도커들끼리 이름으로 접속 가능. 네임리졸루션이라고 함.
  // -> 그래서 사실 mongodb가 실행된 컨테이너는 포트포워딩을 해주지 않아도 됨.(mongoDB compass를 위해 포트포워딩을 해줌.)
  // -> mongodb 경로를 localhost로 하면 express가 실행되는 도커 컴퓨터 내부의 localhost를 가리키기 때문에 접속 불가.
  .then(() => {
    console.log("몽고디비 접속에 성공하였습니다.");
  })
  .catch((err) => {
    console.log(("몽고디비 접속에 실패하였습니다.", err));
  });

app.listen(4000, () => {
  console.log("서버가 4000번 포트에서 실행중입니다.");
});
