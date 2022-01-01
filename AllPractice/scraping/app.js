const csvFilePath = "./perfumeBasic.cvs";
const csv = require("csvtojson");
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        jsonObj.forEach((a) => console.log(a));
    });
