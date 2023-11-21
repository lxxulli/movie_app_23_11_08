import { useForm } from "react-hook-form";
import styled from "styled-components";
import { movieSearch } from "../../api";
import { useState } from "react";
import { Layout } from "../../components/Layout";
import { IMG_URL } from "../../constants";

const Wrap = styled.div`
  margin: 20% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 25px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 20px 50px;
  border: 1px solid #888;
  border-radius: 5px;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  margin: 40px 0 20px;
`;
const ErrorMessage = styled.div``;
const Button = styled.button`
  all: unset;
  width: 100px;
  height: 40px;
  background-color: #333;
  border-radius: 7px;
  font-size: 18px;
  text-align: center;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
  margin-top: 40px;
`;
const ConWrap = styled.div`
  display: grid;
  /* gird가 적용될 부모에게 사용 / 플랙스와 동일 */
  grid-template-columns: repeat(5, 1fr);
  /* 그리도 레이아웃을 규칙에 맞게 반복 시킴 */
  /* repeat(가로 갯수, 크기값)*/
  /* ifr 컨텐츠끼리 1배율씩 똑같은 값으로 크기를 나눠가짐 */
  column-gap: 30px;
  /* 좌우간격 */
  row-gap: 50px;
  /* 상하간격 */
`;
const Con = styled.div``;
const Bg = styled.div`
  width: 200px;
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const MovieTItle = styled.div`
  font-size: 18px;
`;

export const Search = () => {
  // api에 검색 요청에 맞게 url연결과 매개변수 작성할 것
  // form 사용 시 useForm 사용할 것
  // 순수 검색만 필요시엔 useEffect가 필요없음

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  const [term, setTerm] = useState();

  // async = 비동기 작업
  // await = 비동기 작업 안에서 기다려야하는 작업
  // 요청을 했을 때 안되면 네트워크 들어가서 url이 맞는지 확인

  const searchHandler = async (data) => {
    const { search: keyword } = data;
    // ㄴ 유저가 검색한 내용 출력
    // 밑에 이벤트 작동 시 실행될 내용
    try {
      const { results } = await movieSearch(keyword);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(term);
  // 잘 나오는 지 확인

  return (
    <Wrap>
      <Title>찾으시는 영화가 있으신가요?</Title>
      <Form onSubmit={handleSubmit(searchHandler)}>
        <Input
          {...register("search", {
            required: "검색 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="검색 내용"
        />
        <ErrorMessage>{errors?.search?.message}</ErrorMessage>

        <Button $isActive={isValid}>검색</Button>
      </Form>

      <Layout>
        {term && (
          <ConWrap>
            {term.map((data) => (
              <Con key={data.id}>
                <Bg $bgUrl={data.poster_path} />
                <MovieTItle>{data.title}</MovieTItle>
              </Con>
            ))}
          </ConWrap>
        )}
      </Layout>
    </Wrap>
  );
};
