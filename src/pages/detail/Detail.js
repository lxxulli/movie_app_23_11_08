import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 150px 5%;
`;

const MainImg = styled.div``;
const TitleName = styled.div``;
const VoteAverage = styled.div``;
const Genres = styled.div``;
const ReleaseData = styled.div``;
const Runtime = styled.div``;

export const Detail = () => {
  const { id } = useParams();
  // 아이디 값 찾기
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        setDetailData(data);
        // console.log(data);
      } catch (error) {
        console.log("Error :" + error);
      }
    })();
  }, []);

  return (
    <Wrap>
      <MainImg />
      <TitleName>{detailData.title}</TitleName>
      <VoteAverage>{Math.round(detailData.vote_average)}점</VoteAverage>
      {/* <Genres>
        {detailData.genres.map((genre) => {
          // <li>{genre.name}</li>;
        })}
      </Genres> */}
      <ReleaseData>{detailData.release_date}</ReleaseData>
      <Runtime>{detailData.runtime}분</Runtime>
    </Wrap>
  );
};
