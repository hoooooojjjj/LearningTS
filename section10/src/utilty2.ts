// Exclude

type A = string | number | boolean;

let a1: Exclude<A, string>;

type ExcludeType<T, U> = T extends U ? never : T;

let a: ExcludeType<string | number | boolean, string>;

let b1: Extract<string | number | boolean, string>;

type ExtractType<T, U> = T extends U ? T : never;

let b: ExtractType<string | number | boolean, string>;

function func() {
  return 10;
}

type Func = ReturnType<typeof func>;

type Return<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

let result: string =
  "안녕하세요, 유호준입니다. 저는 서울대학교 언론정보학과 학생입니다.";

console.log(
  result.includes("유호준"),
  result.includes("대학교"),
  result.includes("한양대학교")
);
