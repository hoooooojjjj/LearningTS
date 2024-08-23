interface Person {
  name: string;
  age: number;
}

class PersonClass implements Person {
  constructor(public name: string, public age: number, private id: number) {}
}
