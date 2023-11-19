import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";
import { IMG_URL } from "../../constants";

const Wrap = styled.div`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 55%;
  padding: 2% 0;
  font-size: 18px;
  font-weight: 400;
`;

const MainImg = styled.div`
  width: 40%;
  height: 600px;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const Con = styled.ul`
  display: flex;
  margin: 30px 0 20px;
  li {
    margin: 0 7px;
  }
`;

const TitleName = styled.h3`
  font-size: 50px;
  font-weight: 700;
`;
const VoteAverage = styled.div``;
const Runtime = styled.div``;
const Genres = styled.div``;
const ReleaseData = styled.div``;
const Desc = styled.div`
  line-height: 25px;
`;

export const Detail = () => {
  const { id } = useParams();
  // 아이디 값 찾기
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        setDetailData(data);
        console.log(data);
      } catch (error) {
        console.log("Error :" + error);
      }
    })();
  }, []);

  return (
    <Wrap>
      <MainImg $bgUrl={detailData?.poster_path} />
      <Container>
        <TitleName>{detailData?.title}</TitleName>
        <Con>
          <VoteAverage>
            평점 {Math.round(detailData?.vote_average)}점
          </VoteAverage>
          <li>•</li>
          <Runtime>{detailData?.runtime}분</Runtime>
          <li>•</li>
          <ReleaseData>{detailData?.release_date}</ReleaseData>
        </Con>
        <Genres>
          {detailData?.genres.map((genre) => {
            <li key={genre.id}>{genre?.name}</li>;
          })}
        </Genres>
        <Desc>{detailData?.overview}</Desc>
      </Container>
    </Wrap>
  );
};
