// 인터페이스

type A = {
  name: string;
  color: string;
};

interface B {
  name: string;
  color: string;
}

interface Person {
  readonly name: string;
  age?: number;
  sayHi(hello: string): void;
  sayHi(hello: string, name: string): void;
  //   sayHi: (hello: string) => void;
  //   sayHi: (hello: string, name: string) => void;
}

const person: Person = {
  name: "sono",
  sayHi: (hello, name?) => {
    if (typeof name === "string") {
      console.log(`${hello}, 제 이름은 ${name}입니다`);
    } else {
      console.log(hello);
    }
  },
};

person.sayHi("안녕하세요");
person.sayHi("안녕하세요", "sono");

type Union = number | string;
type Intersection = number & string;

// interface Union2 {} | string;
// interface Intersection2 {} & string;

interface obj {
  name: number | string;
  id: number & string;
}
