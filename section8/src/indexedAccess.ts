// 인덱스드 엑세스 타입

// 객체 타입
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    type: string;
  };
}

// const index = "author";

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "제목",
  content: "게시글 내용",
  author: {
    id: 1,
    name: "sono",
    type: "user",
  },
};

printAuthorInfo(post.author);

// 배열 타입

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    type: string;
  };
}[];

const post1: PostList[number] = {
  title: "제목",
  content: "게시글 내용",
  author: {
    id: 1,
    name: "sono",
    type: "user",
  },
};

// 튜플 타입

type Tub = [number, string, number];

const tub1: Tub[0] = 1;
const tub2: Tub[1] = "2";
const tub3: Tub[2] = 3;
const tub: Tub[number] = 1;
