// keyof 연산자

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person: Person = {
  name: "sono",
  age: 23,
};

getPropertyKey(person, "name");
