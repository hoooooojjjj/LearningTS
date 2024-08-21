// 타입 좁히기

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
}

function func1(value: Person | null) {
  if (value && "age" in value) {
    console.log(`${value.name}의 나이는 ${value.age}입니다`);
  }
}

func(1212);
