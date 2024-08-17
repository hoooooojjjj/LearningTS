let numOrStr: number | string;

numOrStr = 1;
numOrStr = "str";

let arr: (number | string | boolean)[] = [1, "str", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",
// };

let numAndStr: number & string;
// numAndStr = 1;

type Human = {
  name: string;
  language: string;
};

type Cat = {
  name: string;
  color: string;
};

type Intersection = Human & Cat;

let intersection: Intersection = {
  name: "sono",
  language: "korean",
  color: "black",
};
