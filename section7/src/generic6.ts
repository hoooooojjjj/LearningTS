const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    // reject("실패");
  }, 3000);
});

promise.then((res) => {
  console.log(res);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "프로미스와 제네릭",
        content: "프로미스를 반환하는 함수 타입을 정의해보자",
      });
    }, 1000);
  });
}

const post1 = await fetchPost();

console.log(post1.id);
