import axios from "axios";
import cheerio from "cheerio";

const createMessage = async () => {
  // 입력된 메시지: "안녕하세요~ https://www.naver.com 에 방문해 주세요!"

  // 1. 입력된 메시지에서 http로 시작하는 문장이 있는지 먼저 찾기!(.find() 등의 알고리즘 사용하기)
  const url = "https://www.daum.net";

  // 2. axios.get으로 요청해서 html코드 받아오기 => 스크래핑
  const result = await axios.get(url);
  console.log(result.data);

  // 3. 스크래핑 결과(result)에서 OG(오픈그래프) 코드 골라내서 변수에 저장하기
  const $ = cheerio.load(result.data);
  $("meta").each((index, element) => {
    if (
      $(element).attr("property") &&
      $(element).attr("property").includes("og:")
    ) {
      const key = $(element).attr("property"); // og:title, og:description, ...
      const value = $(element).attr("content"); // 네이버, 네이버 메인에서 ~~~
      console.log(key, value);
    }
  });
};

createMessage();

// Q. OG 태그 스크래핑은 누가 할까?
// A. 클라이언트의 Proxy 서버 혹은 백엔드 서버에서 한다.
// -> 브라우저에서는 CORS 정책 때문에 다른 사이트의 데이터를 못 가져올 수 있음.
