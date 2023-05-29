interface IUser {
  name: string;
  age: number;
}

interface IBook2 {
  title: string;
  price: number;
}

interface ICart {
  userName: string;
  bookName: string;
}

// 타입을 모아두는 인터페이스
// 특정 기능 또는 역할에 사용되는 타입을 모아서, 타입 관리를 편하게 할 수 있다.
// 예를 들어, 같은 유저 타입이라도 장바구니의 유저, 회원가입의 유저 등 다양한 상황에서 유저 타입이 다를 수 있다.
// 따라서 상황에 맞게 타입을 유연하게 관리하고 사용할 수 있다.
interface IUserCartService {
  user: IUser;

  book: IBook2;

  cart: ICart;
}

function login(params: IUserCartService["user"]) {
  // 유저가 .. 로그인?
  console.log(params);
}
login({ name: "geon", age: 24 });

function searchBook(params: IUserCartService["book"]) {
  // 책 검색 로직
  console.log(params);
}
searchBook({ title: "TS 배우기", price: 29700 });

function addBookToMyCart(params: IUserCartService["cart"]) {
  // 장바구니에 책을 담는 로직
  console.log(params);
}
addBookToMyCart({ userName: "geon", bookName: "TS 배우기" });
