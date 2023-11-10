import styled from "styled-components";
import { nowPlaying } from "../../api";

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
  nowPlaying(); //비동기 통신할 때 그냥 함수를 불러올 수가 없음

  return (
    <>
      <MainBanner>
        <BlackBg />
        <h3>TITLE</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, non
          veritatis voluptate quibusdam nulla molestias eligendi, mollitia
          voluptatibus reprehenderit optio hic ipsam tempore culpa!
        </p>
      </MainBanner>
    </>
  );
};
