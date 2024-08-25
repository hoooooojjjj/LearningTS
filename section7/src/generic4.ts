// 제네릭 인터페이스

import { profile } from "console";
import { Sign } from "crypto";

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let key1: KeyPair<number, string> = {
  key: 1,
  value: "데이터",
};

let key2: KeyPair<string, number[]> = {
  key: "1",
  value: [1, 2],
};

// 인덱스 시그니처
interface NumberMap<V> {
  [key: string]: V;
}

let numberMap1: NumberMap<string> = {
  value: "1",
};

let numberMap2: NumberMap<boolean> = {
  value: true,
};

// 제네릭 타입 별칭

type NumberVar<T> = {
  [key: string]: T;
};

let numberVar: NumberVar<string> = {
  value: "1",
};

// 제네릭 인터페이스 활용 예시

interface Student {
  type: "student";
  school: String;
}

interface Developer {
  type: "developer";
  skill: string;
}

// interface User {
//   name: string;
//   profile: Student | Developer;
// }

// let developerUser1: User = {
//   name: "sono",
//   profile: {
//     type: "developer",
//     skill: "TS",
//   },
// };

// let studentUser1: User = {
//   name: "sono",
//   profile: {
//     type: "student",
//     school: "YC",
//   },
// };

// function goToSchool(user: User) {
//   if (user.profile.type !== "student") {
//     console.log("잘못 오셨습니다");
//     return;
//   }

//   const school = user.profile.school;
//   console.log(`${school}로 등교 완료!`);
// }

interface User<T> {
  name: string;
  profile: T;
}

let developerUser1: User<Developer> = {
  name: "sono",
  profile: {
    type: "developer",
    skill: "TS",
  },
};

let studentUser1: User<Student> = {
  name: "sono",
  profile: {
    type: "student",
    school: "YC",
  },
};

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}
