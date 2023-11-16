import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { ShowMovie } from "./ShowMovie";
import { PacmanLoader } from "react-spinners";
import { Lauout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export const Home = () => {
  // nowPlaying(); //비동기 통신할 때 그냥 함수를 불러올 수가 없음 (이렇게 하면 안됨)
  // 1. 마운트 시 api에 요청
  // 2. 비동기 통신
  // 3. 예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upcomingData, setUpcommingData] = useState();
  // 언제든 밑에 함수를 밖에서도 쓸 수 있게 도와줌
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowPlayingData(nowResults);
        // 통신이 다 끝나고 나서 로딩 호출
        const { results: popResults } = await popular();
        // ㄴ 비구조화활당 후 이름 변경 :
        setPopData(popResults);
        const { results: topResults } = await topRated();
        setTopData(topResults);
        const { results: upcomResults } = await upcoming();
        setUpcommingData(upcomResults);

        // setTopData(topData);

        setIsLoading(false);
        // 로딩 끝
      } catch (error) {
        console.log("에러 : " + error);
      }
    })();
  }, []);
  // [] 뺴면 업데이트 될 때마다 나오기때문에 꼭 붙일 것

  console.log(popData);

  return (
    <>
      {isloading ? ( // 로딩이 참이면 실행
        <PacmanLoader color="hotpink" />
      ) : (
        // 그게 아니라면
        <div>
          {nowPlayingData && (
            <>
              <PageTitle titleName="HOME" />
              <Banner data={nowPlayingData[0]} />
              <Lauout>
                <ShowMovie
                  titleName={"현재 상영 영화"}
                  movieData={nowPlayingData}
                />
                <ShowMovie titleName={"인기 영화"} movieData={popData} />
                <ShowMovie titleName={"TOP 20 영화"} movieData={topData} />
                <ShowMovie
                  titleName={"개봉 예정 영화"}
                  movieData={upcomingData}
                />
              </Lauout>
            </>
          )}
        </div>
      )}
    </>
  );
};
