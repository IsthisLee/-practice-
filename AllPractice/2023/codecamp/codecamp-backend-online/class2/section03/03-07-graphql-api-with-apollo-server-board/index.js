import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// The GraphQL schema
// api-docs를 구성하고 응답으로 돌려줄 타입을 정의
// GraphQL 스키마 정의 언어(Schema Definition Language, SDL)를 사용하여 스키마를 정의
const typeDefs = `#graphql
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }
  
  type Query {
    # fetchBoards: Board # 객체 1개를 의미!
    fetchBoards: [Board] # 배열 안에 객체 1개 이상을 의미!
  }

  type Mutation {
    createBoardOrigin: String
    # createBoard(writer: String, title: String, contents: String): String => 입력값을 낱개로 받아오는 것을 의미
    createBoard(createBoardInput: CreateBoardInput!): String # => 입력값을 객체로 받아오는 것을 의미
  }
`;

// A map of functions which return data for the schema.
// express의 API와 같은 역할
const resolvers = {
  Query: {
    fetchBoards: () => {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다~~",
          contents: "내용이에요@@@"
        },
        {
          number: 2,
          writer: "영희",
          title: "영희 제목입니다~~",
          contents: "영희 내용이에요@@@"
        },
        {
          number: 3,
          writer: "훈이",
          title: "훈이 제목입니다~~",
          contents: "훈이 내용이에요@@@"
        }
      ];

      // 2. 꺼내온 결과 응답 주기
      return result;
    }
  },
  Mutation: {
    createBoardOrigin: (parent, args, context, info) => {
      fetchBoards("01012345678");
      // -> fetchBoards의 parent 인자에 값이 담겨서 넘어감.

      console.log(context.req);
      console.log(context.res);
      // -> context에는 req, res 등이 담겨있음.

      // info에는 graphQL의 기본 정보가 담겨있음.

      return "게시물 등록에 성공하였습니다!!";
    },
    createBoard: (_, args) => {
      // 1. 브라우저에서 보내준 데이터 확인하기
      console.log(args);
      console.log("=========================");
      console.log(args.createBoardInput.writer);
      console.log(args.createBoardInput.title);
      console.log(args.createBoardInput.contents);

      // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

      // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
      return "게시물 등록에 성공하였습니다!!";
    }
  }
};

const app = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  cors: true // 모든 사이트 허용하고 싶을 때
  // cors: { origin: ["https://naver.com", "https://daum.net"] } // 특정 사이트만 지정하고 싶을 때
});

const { url } = await startStandaloneServer(app);
console.log(`🚀 Server ready at ${url}`);
