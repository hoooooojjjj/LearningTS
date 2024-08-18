// 타입 추론
// let num = 10;
// num = "10";

// function func(param) {

// }

// let str = "str";

let obj = {
  name: "hojun",
  profile: {
    nickName: "sono",
    id: 1,
    friend: ["mike", "james"],
  },
};

let arr = [1, "2", true];

let { name, profile } = obj;

let [num, str, bool] = arr;

function func1(say = "hello") {
  return "hello";
}

let a;
a = 10;
// a.toUpperCase();
a = "str";
a.toUpperCase();

const b = 1;
const str1 = "str";
