// 객체타입 간의 호환성

type Animal = {
  name: string;
  color: string;
};

type Dog = { name: string; color: string; age: number };

let animal: Animal = {
  name: "cat",
  color: "white",
};

let dog: Dog = {
  name: "돌돌이",
  color: "black",
  age: 3,
};

animal = dog;

// dog = animal;

type Obj1 = {
  name: string;
  id: number;
  loggedIn: boolean;
  qi?: string;
};

type Obj2 = {
  name: string;
  id: number;
  qi?: string;
};

let obj1: Obj1 = {
  name: "sfad",
  id: 1,
  loggedIn: true,
};

let obj2: Obj2 = {
  name: "sae",
  id: 2,
  qi: "2",
};

obj2 = obj1;

type Book = {
  name: string;
  id: number;
};

type TextBook = {
  name: string;
  id: number;
  subject: string;
};

let book: Book = {
  name: "책",
  id: 1,
};

let textBook: TextBook = {
  name: "수학책",
  id: 2,
  subject: "수학",
};

book = textBook;
// book = {
//   name: "수학책",
//   id: 2,
//   subject: "수학",
// };
