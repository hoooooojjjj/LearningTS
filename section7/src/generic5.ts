// 제네릭 클래스

// class NumberList {
//   constructor(private list: number[]) {}

//   push(data: number): void {
//     this.list.push(data);
//   }
//   pop(): void {
//     this.list.pop();
//   }

//   print(): void {
//     console.log(this.list);
//   }
// }

// const numberList = new NumberList([1, 2, 3, 4]);
// numberList.print();
// numberList.pop();
// numberList.push(5);
// numberList.print();

class List<T> {
  constructor(private list: T[]) {}

  push(data: T): void {
    this.list.push(data);
  }
  pop(): void {
    this.list.pop();
  }

  print(): void {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3, 4]);
numberList.print();
numberList.pop();
numberList.push(5);
numberList.print();

const stringList = new List(["1", "2", "3", "4"]);
stringList.print();
stringList.pop();
stringList.push("5");
stringList.print();
