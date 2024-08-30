// 템플릿 리터럴 타입

type Color = "red" | "green" | "black";

type Animal = "cat" | "dog";

type ColoredAnimal = `${Color}-${Animal}`;

// type ColoredAnimal =
//   | "red-cat"
//   | "green-cat"
//   | "black-cat"
//   | "red-dog"
//   | "green-dog"
//   | "black-dog";
