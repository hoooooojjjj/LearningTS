type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value: number) => {};
let d: D = (value: 10) => {};

// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;

// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color);
// };

dogFunc = animalFunc;

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1 = (a: number, b: number) => {};
let func2 = (a: number) => {};

func1 = func2;
// func2 = func1;
