// 맵드 타입

interface User {
  id: number;
  name: string;
  age: number;
}

const userApi = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "sono",
        age: 23,
      });
    }, 500);
  });
};

// 한명의 유저 정보를 가져오는 함수
async function fetchUser(): Promise<User> {
  const user1: User = await userApi();

  return user1;
}

type PatialUser = {
  readonly [key in keyof User]?: User[key];
};

// 한명의 유저 정보를 수정하는 함수
function updateUser(user: PatialUser) {
  // ... 수정하는 기능
}

updateUser({
  age: 25,
});
