// 사용자 정의 타입 가드

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    animal.isBark && console.log(`우리 ${animal.name}은 물어요`);
  } else if (isCat(animal)) {
    animal.isScratch && console.log(`우리 ${animal.name}은 할퀴어요`);
  }
}

warning({
  name: "sono",
  isScratch: true,
});
