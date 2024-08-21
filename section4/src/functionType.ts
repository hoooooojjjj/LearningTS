// 함수 타입

function add(a: number, b: number): number {
  return a + b;
}

const add2 = (a: number, b: number): number => {
  return a + b;
};

const introduce = (name: string, age: number, tall?: number) => {
  console.log(
    `my name is ${name}, i am ${typeof tall === "number" && tall + 10}`
  );
};

const sum = (...rest: number[]) => {
  let sum: number = 0;
  console.log(rest);
  rest.forEach((it) => {
    sum += it;
  });
  return sum;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7));
console.log(sum(1, 2, 3, 4, 5));
