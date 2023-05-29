function login(params) {
    // 유저가 .. 로그인?
    console.log(params);
}
login({ name: "geon", age: 24 });
function searchBook(params) {
    // 책 검색 로직
    console.log(params);
}
searchBook({ title: "TS 배우기", price: 29700 });
function addBookToMyCart(params) {
    // 장바구니에 책을 담는 로직
    console.log(params);
}
addBookToMyCart({ userName: "geon", bookName: "TS 배우기" });
