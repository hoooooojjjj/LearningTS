// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
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
var RoleName;
(function (RoleName) {
    RoleName["ADMIN"] = "ADMIN";
    RoleName["USER"] = "USER";
    RoleName["GUEST"] = "GUEST";
})(RoleName || (RoleName = {}));
console.log(RoleName);
export {};
