const jwt = require("jsonwebtoken");
const User = require("../models/user");

//미들웨어 형식
//미들웨어는 반드시 next가 호출되어야 한다.
//next가 호출되지 않으면 미들웨어 레벨에서 예외처리에 걸려서 뒤에 있는 미들웨어까지는 연결이 안되는 형태로 되버림.
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [tokenType, tokenValue] = authorization.split(" ");

  if (tokenType !== "Bearer") {
    res.status(401).send({
      errorMessage: "로그인 후 사용하세요",
    });
    return;
  }

  try {
    const { userId } = jwt.verify(tokenValue, "my-secret-key0");

    User.findById(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (error) {
    res.status(401).send({
      errorMessage: "로그인 후 사용하세요",
    });
    return;
  }
};
