// any

let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = () => {};

// let num: number = 10;
// num = anyVar;

anyVar.toUpperCase();

// unknown
let unknownVar: unknown = 10;
// unknownVar = "hello";
// unknownVar = true;
// unknownVar = () => {};

let num: number = 10;

if (typeof unknownVar === "number") {
  num = unknownVar;

  unknownVar + 10;
}

if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}
