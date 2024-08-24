function func<T, U>(a: T, b: U) {
  return [b, a];
}

let [arr1, arr2] = func("1", 2);
console.log(arr1, arr2);

function func2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let dataVar = func2(["0", 1, 2]);
let dataVar2 = func2([1, 2]);

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let arrLength = getLength([1, 2, 3]);
let strLength = getLength("hello");
let objHasLength = getLength({ length: 10 });

interface A {
  length: number;
}

interface B extends A {}
