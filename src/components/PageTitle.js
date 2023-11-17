import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title> YUL | {titleName}</title>
      </Helmet>
    </HelmetProvider>
    // react-helmet 오류 이슈로 삭제 후 react-helmet-async를 재설치
    // 헬맷 부모로 HelmetProvider를 감싸면 끝
  );
};
