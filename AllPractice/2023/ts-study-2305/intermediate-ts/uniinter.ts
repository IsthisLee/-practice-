/**----- 1. union 합집합 -> | (OR) -----*/
let nameOrAge: string | number;
nameOrAge = "geon";
nameOrAge = 24;

interface IName {
  name: string;
}
interface IAge {
  age: number;
}

type NameOrAgeObj = IName | IAge;

function prtUnion(params: NameOrAgeObj) {
  // 서버에 name 정보가 들어왔을 때 로직
  if ("name" in params) {
    // 타입 가드
    console.log(params.name);
  }
  // 서버에 age 정보가 들어왔을 때 로직
  if ("age" in params) {
    console.log(params.age);
  }
}
prtUnion({ name: "geon" });
prtUnion({ age: 24 });

/**----- 2. intersection 교집합 -> & (AND)  -----*/
const nameAndAge: IName & IAge = {
  name: "geon",
  age: 24
};

type ForSearch = IName & IAge;

function search(params: ForSearch) {
  console.log(params.name + " " + params.age);
}
search({ name: "geon", age: 24 });
