interface ICity {
  name: string;
}

interface ISchool {
  year: number;
}

interface IStudent extends ICity {
  name: string;
}

// ISchool이 ICity를 상속받았다면 number, 아니라면 string
type ConditionType = ISchool extends ICity ? number : string;
const test: ConditionType = "hi"; // string type

type ConditionType2 = IStudent extends ICity ? number : string;
const test2: ConditionType2 = 123; // number type
