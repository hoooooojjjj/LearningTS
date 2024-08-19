// 타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "sono";
person.age = 23;

type Dog = {
  name: string;
  age: number;
};

let dog: Dog = {
  name: "doldol",
  age: 3,
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
type Type = {};

const var1 = {
  name: "",
} as Type;

const num1 = 10 as unknown;
const num2 = 10 as unknown as string;

let num3 = 10 as const;
// num3 = 11;

const Role1 = { ADMIN: 0 as const, USER: 1, GUEST: 2 };
// Role.ADMIN = 3;

const Role2 = { ADMIN: 0, USER: 1, GUEST: 2 } as const;
// Role.ADMIN = 3;

type Post = {
  content: string;
  author?: string;
};

let post: Post = {
  content: "게시글",
  author: "sono",
};

const postLength: number = post.author!.length;
