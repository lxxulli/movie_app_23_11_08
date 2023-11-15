import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";
import { IMG_URL } from "../../constants";
import { Banner } from "./Banner";

export const Home = () => {
  // nowPlaying(); //비동기 통신할 때 그냥 함수를 불러올 수가 없음 (이렇게 하면 안됨)
  // 1. 마운트 시 api에 요청
  // 2. 비동기 통신
  // 3. 예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  // 언제든 밑에 함수를 밖에서도 쓸 수 있게 도와줌
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);
        // 통신이 다 끝나고 나서 로딩 호출
        setIsLoading(false);
        // 로딩 끝
      } catch (error) {
        console.log("에러 : " + error);
      }
    })();
  }, []);
  // [] 뺴면 업데이트 될 때마다 나오기때문에 꼭 붙일 것

  console.log(nowPlayingData);

  return (
    <>
      {isloading ? ( // 로딩이 참이면 실행
        "loading..."
      ) : (
        // 그게 아니라면
        <div>{nowPlayingData && <Banner data={nowPlayingData} />}</div>
      )}
    </>
  );
};
