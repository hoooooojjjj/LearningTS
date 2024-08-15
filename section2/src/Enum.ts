// enum
// const Role = {
//   ADMIN: 0,
//   USER: 1,
//   GUEST: 2,
// } as const;

// Role.ADMIN = 3;

// const user1 = {
//   name: "sono",
//   role: ADMIN, // <- 0번은 관리자
// };
enum Role {
  ADMIN,
  USER = 1,
  GUEST,
}
// Role.ADMIN = 1;
const user1 = {
  name: "sono",
  role: Role.ADMIN, // <- 0번은 관리자
};
const user2 = {
  name: "mike",
  role: Role.USER, // <- 1번은 일반 유저
};
const user3 = {
  name: "james",
  role: Role.GUEST, // <- 2번은 게스트
};

enum RoleName {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}
console.log(RoleName);
