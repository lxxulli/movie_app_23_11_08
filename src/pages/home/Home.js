import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";

const MainBanner = styled.section`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }
  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(94, 94, 94, 0.765625) 45%,
    rgba(255, 255, 255, 0.8854166) 100%
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);
        // 통신이 다 끝나고 나서 로딩 호출
        setLoading(false);
      } catch (error) {
        console.log("에러" + error);
      }
    })();
  }, []);

  console.log(loading);
  console.log(nowPlayingData);

  return (
    <>
      {loading ? ( // 로딩이 참이면 실행
        "loading..."
      ) : (
        // 그게 아니면
        <div>
          {nowPlayingData && (
            <MainBanner>
              <BlackBg />
              <h3>{nowPlayingData[0].title}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                non veritatis voluptate quibusdam nulla molestias eligendi,
                mollitia voluptatibus reprehenderit optio hic ipsam tempore
                culpa!
              </p>
            </MainBanner>
          )}
        </div>
      )}
    </>
  );
};
