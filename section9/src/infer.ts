// infer
type Func = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<Func>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;

type PromiseUnPack<T> = T extends Promise<infer P> ? P : never;

type PromiseA = PromiseUnPack<Promise<number>>;
