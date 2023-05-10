const { google } = require("googleapis");

const params = {
  formID: "1b5W0-F5laXSy4cx-ICMbobIijWv_DmMRkvOmKf9cOI4"
};

async function runSample() {
  // 다운로드 한 키 파일을 사용하여 새 JWT 클라이언트 생성
  const auth = new google.auth.GoogleAuth({
    keyFile: "./credentials.json",
    scopes: ["https://www.googleapis.com/auth/forms.responses.readonly"]
  });

  // JWT 클라이언트를 사용하여 Google API 클라이언트 생성
  const forms = google.forms({ version: "v1", auth: auth });

  // Google Forms API를 사용하여 툭정 Google Form의 응답 목록을 가져온다.
  const res = await forms.forms.responses.list({ formId: params.formID });

  // 응답 목록 출력
  console.log(res.data);

  // 응답 상세 목록 출력
  res.data.responses.forEach((response) => {
    console.log(response);
  });

  return res.data;
}

// 현재 모듈이 직접 실행될 때 runSample 함수를 호출
if (module === require.main) {
  runSample().catch(console.error);
}

// module.exports = runSample;
