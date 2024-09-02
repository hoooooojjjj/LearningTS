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

const post4: Readonly<Post> = {
  title: "제목",
  tags: ["1", "2"],
  content: "내용",
  thumbnailURL: "png",
};

type ReadonlyPost<T> = {
  readonly [key in keyof T]: T[key];
};

// post.title = "";

const legacyPost1: Pick<Post, "title" | "content"> = {
  title: "옛날 제목",
  content: "옛날 내용",
};

type PickPost<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost2: Omit<Post, "tags"> = {
  title: "옛날 제목",
  content: "옛날 내용",
};

type Exclude<U, V> = U extends V ? never : U;

type OmitPost<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "tags"
// Pick<Post, Exclude<"title" | "content" | "tags" | "thumbnailURL", "tags">>
// Pick<Post, "title" | "content" | "thumbnailURL">
/* {
title : string;
content : string;
thumbnailURL : string
}*/

const legacyPost: OmitPost<Post, "tags"> = {
  title: "옛날 제목",
  content: "옛날 내용",
};

type ThumbnailURL1 = {
  large: {
    url: string;
    id: number;
  };
  medium: {
    url: string;
    id: number;
  };
  small: {
    url: string;
    id: number;
  };
  watch: {
    url: string;
    id: number;
  };
};

type ThumbnailURL = Record<"large" | "medium" | "small", { url: string }>;
