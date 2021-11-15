function getAgeAverage(personArray) {
  let sum = 0;
  personArray.forEach((info) => (sum = sum + info["age"]));
  return sum / personArray.length;
}

var personArray = [
  { name: "John Doe", age: 20 },
  { name: "Jane Doe", age: 19 },
  { name: "Fred Doe", age: 32 },
  { name: "Chris Doe", age: 45 },
  { name: "Layla Doe", age: 37 },
];

console.log(getAgeAverage(personArray)); // 30.6
