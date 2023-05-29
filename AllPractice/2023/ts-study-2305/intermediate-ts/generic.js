function printType(params) {
    console.log(typeof params);
}
printType("아무거나");
printType(24);
printType({});
function prt(params) {
    console.log(typeof params.data);
    console.log(typeof params.name);
    console.log(typeof params.age);
}
prt({ data: [24, 222, 2344], name: "geon", age: 24 });
