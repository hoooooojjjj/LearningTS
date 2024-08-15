// 배열
let numArray = [1, 2, 3, 4, 5];
let strArray = ["hello", "i'm", "sono"];
let boolArray = [true, false, true];
let nullArray = [null, null, null];
let undefinedArray = [undefined, undefined, undefined];
// 배열에 여러 타입이 들어가는 경우
let mutiTypeArray = [1, "hello"];
let mutiTypeArray2 = [1, "hello", null];
// 다차원 배열의 타입을 정의하는 방법
let doubleArray = [
    [1, 2, [1, 2]],
    [3, "str"],
];
// 튜플
let tup = [1, 2];
let tup2 = [1, "str", true];
tup2.push(2);
tup2.pop();
tup2.pop();
tup2.pop();
// 튜플 타입이 유용한 사례
const user = [
    ["sono", 1],
    ["mike", 2],
    ["james", 3],
    //   [4, "bell"],
];
export {};
