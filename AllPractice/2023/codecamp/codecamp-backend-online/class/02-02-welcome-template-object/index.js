function getWelcomeTemplate(name, age, school, createdAt) {
  return `
      <html>
          <body>
              <h1>${name}님 가입을 환영합니다.</h1>
              <hr />
              <div>이름: ${name}</div>
              <div>나이: ${age}살</div>
              <div>학교: ${school}</div>
              <div>가입일: ${createdAt}</div>
          </body>
      </html>
  `;
}

const myName = "철수";
const myAge = 13;
const mySchool = "다람쥐초등학교";
const myCreatedAt = "2010-09-07";

const result = getWelcomeTemplate(myName, myAge, mySchool, myCreatedAt);
console.log(result);

// 위 코드 보완
function getWelcomeTemplate2(user) {
  return `
      <html>
          <body>
              <h1>${user.name}님 가입을 환영합니다.</h1>
              <hr />
              <div>이름: ${user.name}</div>
              <div>나이: ${user.age}살</div>
              <div>학교: ${user.school}</div>
              <div>가입일: ${user.createdAt}</div>
          </body>
      </html>
  `;
}

const myUser = {
  name: "철수",
  age: 13,
  school: "다람쥐초등학교",
  createdAt: "2010-09-07"
};

const result2 = getWelcomeTemplate2(myUser);
console.log(result2);
