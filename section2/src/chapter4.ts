// 타입 별칭

type User = {
  id: number;
  name: string;
  nickName: string;
  birth: string;
  location: string;
  bio: string;
};

let user: User = {
  id: 1,
  name: "hojun",
  nickName: "sono",
  birth: "2002.08.04",
  location: "seoul",
  bio: "hello",
};

let user2: User = {
  id: 2,
  name: "hojun2",
  nickName: "sono2",
  birth: "2002.08.04",
  location: "seoul",
  bio: "hello",
};

// 인덱스 시그니처

type Country = {
  [key: string]: string | number;
  Korea: string;
};

// let country: Country = {};
