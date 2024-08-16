// unknown 타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "str";
  let c: unknown = true;
  let d: unknown = undefined;
  let e: unknown = null;
  let f: unknown = {};

  let unknownVar: unknown;
  //   let num: number = unknownVar;
}

// never 타입
function neverExam() {
  //   let a: never = 1;
  //   let b: never = "str";
  //   let c: never = true;
  //   let d: never = undefined;
  //   let e: never = null;
  //   let f: never = {};

  let neverVar: never;
  let num: number = neverVar;
  let str: string = neverVar;
  let bool: boolean = neverVar;
  let undefinedVar: undefined = neverVar;
  let nullVar: null = neverVar;
  let obj: {} = neverVar;
}

// void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hello");
    return undefined;
  }

  //   const undefinedVar: undefined = voidFunc();
  //   let a: void = 1;
  //   let b: void = "str";
  //   let c: void = true;
  //   let d: void = undefined;
  //   let e: void = null;
  //   let f: void = {};

  //   let voidVar: void;
  //   let num: number = voidVar;
  //   let str: string = voidVar;
  //   let bool: boolean = voidVar;
  //   let undefinedVar: undefined = voidVar;
  //   let nullVar: null = voidVar;
  //   let obj: {} = voidVar;
}

let unknownVar: unknown;
let anyVar: any;
let undefinedVar: undefined;
let neverVar: never;

anyVar = unknownVar;
undefinedVar = anyVar;
// neverVar = anyVar;
