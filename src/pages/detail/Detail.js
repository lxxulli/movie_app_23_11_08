import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";
import { useScrollTop } from "../../lib/useScrollTop";

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
const VoteAverage = styled.div`
  span {
    color: red;
  }
`;
const Runtime = styled.div``;
const ReleaseData = styled.div``;
const Genres = styled.ul`
  margin: 0 0 30px;
  display: flex;
  color: #888;
  li {
    color: #ccc;
    background-color: #555;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
  }
`;
const Desc = styled.div`
  border-top: 1px solid white;
  padding: 30px 0 0;
  line-height: 25px;
`;

export const Detail = () => {
  const { id } = useParams();
  // 아이디 값 찾기
  const [detailData, setDetailData] = useState();
  const [isloading, setLoading] = useState(true);
  // 로딩은 안하면 밑에 detailData?.ddd 이렇게 해야함
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        setDetailData(data);
        setLoading(false);
      } catch (error) {
        console.log("Error :" + error);
      }
    })();
  }, [id]);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <Wrap>
          <PageTitle titleName="detail" />
          <MainImg $bgUrl={detailData.poster_path} />
          <Container>
            <TitleName>{detailData.title}</TitleName>
            <Con>
              <VoteAverage>
                평점 <span>{Math.round(detailData.vote_average)}점</span>
              </VoteAverage>
              <li>•</li>
              <Runtime>{detailData.runtime}분</Runtime>
              <li>•</li>
              <ReleaseData>{detailData.release_date}</ReleaseData>
            </Con>
            <Genres>
              {detailData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Genres>
            <Desc>{detailData.overview}</Desc>
          </Container>
        </Wrap>
      )}
    </>
  );
};
