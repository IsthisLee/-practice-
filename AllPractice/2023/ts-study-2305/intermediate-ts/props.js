function prt(params) {
    if ("name" in params)
        console.log(params.name);
    else if ("school" in params)
        console.log(params.school);
    else if ("city" in params)
        console.log(params.city);
}
prt({ name: "geon" });
function prt2(params) {
    if ("name" in params)
        console.log(params.name);
    else if ("school" in params)
        console.log(params.school);
    else if ("city" in params)
        console.log(params.city);
    else
        console.log("error 500");
}
prt2({ name2: "geon" });
