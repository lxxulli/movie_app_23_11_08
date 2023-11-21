import styled from "styled-components";

const Container = styled.div`
  padding: 150px 5%;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
  // 부모박스로 만들면 안에 있는 디자인에 전부 영향을 줌
};
