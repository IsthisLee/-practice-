const jwt = require("jsonwebtoken");

//sign을 하면 token내용이 만들어짐.
const token = jwt.sign({ test: true }, "my-secret-key");

console.log(token);

const decoded = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE2Mzc4NDY0MzZ9.8SVsn1SKig9q6DNmAx9ccXqkgm8cXvL3BftweWj27tE",
  "my-secret-key"
);

console.log(decoded);
