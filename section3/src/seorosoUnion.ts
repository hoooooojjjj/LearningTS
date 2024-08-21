// 서로소 유니온 타입 : 교집합이 없는 타입들로만 만든 유니온 타입

// 회원관리 기능
type Admin = {
  tag: "ABMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case "ABMIN":
      console.log(
        `${user.name}님 현재까지 ${user.kickCount}명 강퇴하셨습니다.`
      );
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
      break;
    case "GUEST":
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
      break;
  }
}
type LoadingTask = {
  state: "Loading";
};

type ErrorTask = {
  state: "Error";
  error: {
    massage: string;
  };
};

type SuccessTask = {
  state: "Success";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | ErrorTask | SuccessTask;

const loading = {
  state: "Loading",
};

const error = {
  state: "Error",
  error: {
    massage: "에러..",
  },
};

const success = {
  state: "Success",
  response: {
    data: "데이터..",
  },
};

function asyncTask(task: AsyncTask) {
  switch (task.state) {
    case "Loading":
      console.log("로딩 중");
      break;
    case "Error":
      console.log(task.error.massage);
      break;
    case "Success":
      console.log(task.response.data);
      break;
  }
}
