// 타입스크립트 클래스

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work(): void {
    console.log("일하는 중");
  }
}

const employee: Employee = new Employee("sono", 23, "개발자");

function working(employee: Employee): void {
  console.log(`${employee.name}은 ${employee.position}으로 일하고 있다.`);
}

const employee2: Employee = {
  name: "hojun",
  age: 23,
  position: "FE",
  work() {
    console.log("FE 개발자이다");
  },
};

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const executiveOfficer = new ExecutiveOfficer("sono", 23, "lead", 1);

const executiveOfficer2: ExecutiveOfficer = {
  name: "hojun",
  age: 23,
  position: "lead",
  work() {
    console.log("lead 개발자이다");
  },
  officeNumber: 1,
};
