function Controller(aaaaaaaaaa: any) {
  console.log("--------------------");
  console.log(aaaaaaaaaa);
  console.log("--------------------");
}

@Controller
class CatsController {}
// => 데코레이터 다음 부분이 데코레이터 함수의 인자로 들어간다.
