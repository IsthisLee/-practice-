type userType = "admin" | "manage" | "user"; // string 리터럴 타입

interface IAdmin {
  type: userType;
  post: any;
  info: any;
  detail: any;
}

interface IManager {
  type: userType;
  post: any;
  info: any;
}

interface IUser {
  type: userType;
  post: any;
}

// admin manager user 권한에 따라 값이 다르게
function getLogic(p: IAdmin | IManager | IUser) {
  console.log("--그냥 가져오는 로직", p.post);
  // detail, info와 같이 IAdmin | IManager | IUser의 공통적인 속성이 아닌 경우 오류 발생

  switch (p.type) {
    case "admin":
      //console.log(p.info) // 아직 계속 오류 발생 -> 타입 캐스팅을 통해 해결

      console.log("post 불러오기 -> ", (p as IAdmin).post);
      console.log("info 불러오기 -> ", (p as IAdmin).info);
      console.log("detial 불러오기 -> ", (p as IAdmin).detail);
      break;

    case "manage":
      console.log("post 불러오기 -> ", (<IManager>p).post);
      console.log("info 불러오기 -> ", (<IManager>p).info);
      break;

    case "user":
      console.log("post 불러오기 -> ", p.post);
      break;

    default:
      break;
  }
}
getLogic({
  type: "admin",
  post: "admin post",
  info: "admin info",
  detail: "admin detail"
});

// ---------------numeric 리터럴 타입---------------
console.log(
  "-------------------------numeric 리터럴 타입-------------------------"
);

type errorCode = 404 | 500; // numeric 리터럴 타입
interface I_NOT_FOUND {
  code: errorCode;
  notFoundFunc: any;
}
interface I_INTER_ERROR {
  code: errorCode;
  interError: any;
}

function errorHandler(p: I_NOT_FOUND | I_INTER_ERROR) {
  switch (p.code) {
    case 404:
      console.log((p as I_NOT_FOUND).notFoundFunc);
      break;

    case 500:
      console.log((<I_INTER_ERROR>p).interError);
      break;

    default:
      break;
  }
}
errorHandler({ code: 404, notFoundFunc: "not found function" });
errorHandler({ code: 500, interError: "서버 분기후 재가동" });
