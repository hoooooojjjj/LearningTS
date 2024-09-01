// 맵드 타입 기반 유틸리티 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const post1: Partial<Post> = {
  title: "제목..?",
  content: "뭐라고 쓸까...",
};

type PartialPost<T> = {
  [key in keyof T]?: T[key];
};

const post2: Required<Post> = {
  title: "제목",
  tags: ["1", "2"],
  content: "내용",
  thumbnailURL: "png",
};

type RequiredPost<T> = {
  [key in keyof T]-?: T[key];
};

const post3: RequiredPost<Post> = {
  title: "제목",
  tags: ["1", "2"],
  content: "내용",
  thumbnailURL: "png",
};

const post: Readonly<Post> = {
  title: "제목",
  tags: ["1", "2"],
  content: "내용",
  thumbnailURL: "png",
};

type ReadonlyPost<T> = {
  readonly [key in keyof T]: T[key];
};

post.title = "";
