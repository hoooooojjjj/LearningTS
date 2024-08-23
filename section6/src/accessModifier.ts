class Employee {
  constructor(
    public name: string,
    private age: number,
    protected position: string
  ) {}

  work(): void {
    console.log("일하는 중");
  }
}

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

  lead() {
    this.name;
    // this.age;
    this.position;
  }
}

const employee: Employee = new Employee("sono", 23, "개발자");

employee.name;
// employee.age;
// employee.position;
console.log(employee);
