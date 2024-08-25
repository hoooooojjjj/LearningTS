const arr = [1, 2, 3, 4, 5];

let arr2: number[] = arr.map((ele: number): number => {
  return ele + 1;
});

function map<T, U>(arr: T[], callback: (ele: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}
const numArr = map([1, 2, 3], (ele) => {
  return ele * 2;
});

const strArr = map(["1", "2", "3"], (ele) => {
  return parseInt(ele);
});

console.log(numArr);
console.log(strArr);

const arr3 = [1, 2, 3];

arr3.forEach((ele) => {
  console.log(ele);
});

function forEach<T>(arr: T[], callback: (ele: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr3, (ele) => {
  console.log(ele);
});
