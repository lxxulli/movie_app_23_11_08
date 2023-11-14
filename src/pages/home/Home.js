import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";
import { IMG_URL } from "../../constants";

const MainBanner = styled.section`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;

  h3,
  p {
    position: relative;
  }
  h3 {
    max-width: 650px;
    width: 100%;
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }
  p {
    max-width: 650px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }

  @media screen and (max-width: 450px) {
    h3 {
      font-size: 50px;
      line-height: 60px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(94, 94, 94, 0.765625) 45%,
    rgba(255, 255, 255, 0.7854166) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

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
        <div>
          {nowPlayingData && ( // 안전장치 1개 더
            <MainBanner $bgUrl={nowPlayingData[0].backdrop_path}>
              <BlackBg />
              <h3>{nowPlayingData[0].title}</h3>
              <p>{nowPlayingData[0].overview.slice(0, 100) + "..."}</p>
            </MainBanner>
          )}
        </div>
      )}
    </>
  );
};
