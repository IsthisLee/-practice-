const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async (keyword) => {
    keyword = encodeURI(keyword);
    try {
        return axios.get(
            `https://www.lotteon.com/search/search/search.ecn?render=search&platform=pc&q=%ED%96%A5%EC%88%98&mallId=2`
        );
    } catch (err) {
        console.log(err);
    }
};

const getData = async (keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);

    const contentList = $("#c201_goods ul li");
    let titles = [];

    contentList.each((idx, elem) => {
        titles.push($(elem).find(".srchGridProductUnit _dataLayerTarget"));
    });

    titles.forEach((item) => console.log(item));
    console.log("contentList : ", contentList, "titles : ", titles);
};

getData("바보");

/*
#s_content > div.section > ul > li:nth-child(1) > dl > dt > a
#c201_goods > ul > li:nth-child(1) > div > a > div > div:nth-child(1) > div.srchProductUnitTitle > strong
#c201_goods > ul > li:nth-child(1) > div
 */
