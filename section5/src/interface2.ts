// 인터페이스 확장

type Animal = {
  name: string;
  color: string;
};

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}
const dog: Dog = {
  name: "kiki",
  color: "red",
  isBark: true,
};
const cat: Cat = {
  name: "doldol",
  color: "black",
  isScratch: true,
};

interface DogCat extends Dog, Cat {}

const DogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
