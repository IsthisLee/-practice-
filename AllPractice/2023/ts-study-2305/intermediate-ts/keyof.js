function prt(params, key) {
    // keyof IBook -> title | publisher | price | author 네 가지로 제한된다.
    console.log(params[key]);
}
prt({
    title: "TS 공부",
    publisher: "인프런",
    price: 29700,
    author: "거니"
}, "title");
