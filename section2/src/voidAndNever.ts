// void

function func(): string {
  return "hello";
}

console.log(func());

function func2(): void {
  console.log("hello");
  return undefined;
}
func2();

let voidVar: void;
// voidVar = null;

// never

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let neverVar: never;

// neverVar = 1;
// neverVar = undefined;
// neverVar = null;

// let anyVar: any;

// neverVar = anyVar;
