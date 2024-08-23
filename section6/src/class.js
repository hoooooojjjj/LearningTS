// 클래스

// let studentA = {
//   name: "sono",
//   age: 23,
//   grade: "A+",
//   study: () => {
//     console.log("열심히 타입스크립트 공부 중!");
//   },
//   introduce: () => {
//     console.log("안녕하세요");
//   },
// };

class Student {
  name;
  age;
  grade;

  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  study() {
    console.log("열심히 공부 중!");
  }

  introduce() {
    console.log(`내 이름은 ${this.name}`);
  }
}

let studentA = new Student("sono", 23, "A+");
studentA.study();
studentA.introduce();

class StudentDeveloper extends Student {
  skill;

  constructor(name, age, grade, skill) {
    super(name, age, grade);
    this.skill = skill;
  }

  programming() {
    console.log(`나는 ${this.skill} 프로그래밍 중`);
  }
}
let studentDeveloperA = new StudentDeveloper("sono", 23, "A+", "JS");
console.log(studentDeveloperA);
studentDeveloperA.programming();

class Person {
  name;
  static age = 23;
  #region;

  constructor(name, region) {
    this.name = name;
    this.#region = region;
  }

  sayHi() {
    console.log(`안녕하세요 제 이름은 ${this.name}입니다`);
  }

  static getAge() {
    console.log(`제 나이는 ${Person.age}입니다`);
  }

  #getRegion() {
    return `제가 사는 곳은 ${this.#region}입니다`;
  }

  myRegion() {
    console.log(this.#region);
  }

  getMyRegion() {
    console.log(this.#getRegion());
  }
}

const person = new Person("sono", "seoul");

console.log(person.name);
person.sayHi();
console.log(Person.age);
Person.getAge();
person.myRegion();
person.getMyRegion();

class User {
  name;

  constructor(name) {
    this.name = name;
  }

  get getName() {
    return this.name + "입니다";
  }

  set setName(newName) {
    if (newName.length >= 5) {
      throw new Error("이름이 5자 이상입니다");
    } else {
      this.name = newName;
    }
  }
}

const user = new User("sono");

user.setName = "hojuns";
