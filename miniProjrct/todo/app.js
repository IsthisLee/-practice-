const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const Todo = require("./models/todo");

mongoose.connect("mongodb://localhost/todo-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router(); //express에선 이 router자체만으로 미니 앱이라 부름. 완전 독립된 하나의 express 앱처럼 쓸 수 있는 것인데 router 기능만 제공하는 앱.

router.get("/", (req, res) => {
  res.send("Hi!");
});

router.get("/todos", async (req, res) => {
  const todos = await Todo.find().sort("-order").exec();

  res.send({ todos });
});

router.post("/todos", async (req, res) => {
  const { value } = req.body; //value를 destructoring함. 구조 분해 할당이라고도 함. 이렇게 하여 body에 있는 value값에 접근.
  const maxOrderTodo = await Todo.findOne().sort("-order").exec();
  let order = 1;

  if (maxOrderTodo) {
    order = maxOrderTodo.order + 1;
  }

  const todo = new Todo({ value, order });
  await todo.save();

  res.send({});
});

router.patch("/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const { order, value, done } = req.body;

  const todo = await Todo.findById(todoId).exec();

  if (order) {
    const targetTodo = await Todo.findOne({ order }).exec();
    if (targetTodo) {
      targetTodo.order = todo.order;
      await targetTodo.save();
    }
    todo.order = order;
  } else if (value) {
    todo.value = value;
  } else if (done !== undefined) {
    todo.doneAt = done ? new Date() : null;
  }

  await todo.save();
  res.send({});
});

router.delete("/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;

  const todo = await Todo.findById(todoId).exec();
  await todo.delete();

  res.send({});
});

//app.use 는 미들웨어를 붙일 수 있는 코드
//경로 맨 앞에 /api가 붙어 있어야만 뒤에 있는
//express.json()과 router라는 미들웨어에 연결이 됨.
// 해석 -> /api라는 경로로 뭔가 요청이 들어와면 express.json 미들웨어로 json 바디(body-parser)를 받아들일 수 있다.
// -> 그리고 router를 미들웨어로 붙였다. router가 여기 미들웨어로 있기 때문에 /api를 붙여서 요청을 해야만 위에 있는 router.get 경로에 연결할 수 있다.
app.use("/api", express.json(), router);
app.use(express.static("./assets")); //assets파일들을 그대로 서빙해줌.

app.listen(8080, () => {
  console.log("서버가 켜졌어요!");
});
