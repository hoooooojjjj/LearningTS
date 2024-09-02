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
