interface Person {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

// interface Person {
//   name: string;
//   name: number;
//   age: number;
// }

const person: Person = {
  name: "sono",
  age: 23,
};

interface Lib {
  id: number;
  loggedIn: boolean;
}

interface Lib {
  kicked: boolean;
}

const lib: Lib = {
  id: 1,
  loggedIn: true,
  kicked: false,
};
