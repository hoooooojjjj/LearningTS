// 조건부 타입

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? ObjB : ObjA;

// 제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let stringVar: StringNumberSwitch<number>;
let numberVar: StringNumberSwitch<string>;

function removeSpace<T>(text: T): T extends string ? string : undefined;

function removeSpace(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpace("hi, i am sono");
console.log(result.toUpperCase());

let undefinedResult = removeSpace(121212);
