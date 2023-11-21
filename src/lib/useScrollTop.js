import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  const { pathname } = useLocation(); // 위치, 경로
  // 현재 페이지의 경로 내용을 객체로 반환하는 훅

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // 스무스하게 페이지 위로 올라감
    });
  }, [pathname]); // << 업데이트 될 때마다 실행될 행동
  // detail useEffect내부에 넣으면 오류가 떠서 현재 파일에서 따로 useEffect 작성
  return;
  // let a = null >> let a; 같은 느낌
};
