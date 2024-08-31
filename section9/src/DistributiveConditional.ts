// 분산적인 조건부 타입

type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let stringVar: StringNumberSwitch<number>;
let numberVar: StringNumberSwitch<string>;
let unionVar: StringNumberSwitch<number | string>;

type Exclude<T, U> = T extends U ? never : T;

let A: Exclude<number | string | boolean, string>;

type Extract<T, U> = T extends U ? T : never;

let B: Extract<number | string | boolean, string>;
