// 제네릭

function func<T>(value: T): T {
  return value;
}

let num = func(1);
let bool = func(true);
let str = func("str");
let numArr = func<[number, number, number]>([1, 2, 3]);
