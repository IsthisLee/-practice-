const { google } = require("googleapis");
const { client_email, private_key } = require("./credentials.json");

const params = {
  formID: "1ZoJiT6nBxtMgkHOXKc_efbTl2R96V7My3cRJEREfUoI"
};

async function runSample() {
  // 다운로드 한 키 파일을 사용하여 새 JWT 클라이언트 생성
  const auth = new google.auth.JWT(client_email, null, private_key, [
    "https://www.googleapis.com/auth/forms.responses.readonly"
  ]);

  // JWT 클라이언트를 사용하여 Google API 클라이언트 생성
  const forms = google.forms({ version: "v1", auth: auth });

  // Google Forms API를 사용하여 툭정 Google Form의 응답 목록을 가져옴
  const res = await forms.forms.responses.list({ formId: params.formID });

  // 응답 목록 출력
  console.log("data: ", res.data);

  // 응답 상세 목록 출력
  res.data.responses.forEach((response) => {
    console.log("response: ", response);
  });

  return res.data;
}

// 현재 모듈이 직접 실행될 때 runSample 함수를 호출
if (module === require.main) {
  runSample().catch(console.error);
}

// module.exports = runSample;
