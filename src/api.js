const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-kr";
const popularUrl = baseUrl + "movie/popular" + "?language=ko-kr";
const topRatedUrl = baseUrl + "movie/top_rated" + "?language=ko-kr";
const upcomingUrl = baseUrl + "movie/upcoming" + "?language=ko-kr";

// const url = (urlName) => {
//   return baseUrl + `${urlName}` + "?language=ko-kr";
// };

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDczOGFhNWYzYTA4NGZjZjcxYjgyYzUzN2VkYjAxMCIsInN1YiI6IjY1NGIzYTFiNTMyYWNiNTMzYTEzZjgzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9t2x0yh11EgJzBNd8W406DQbWqOXPm5idJY3DvOzByk",
  },
};

// export const nowPlaying = () =>
//   fetch("movie/now_playing", options).then((res) => res.json());

export const nowPlaying = () =>
  fetch(nowPlayingUrl, options).then((res) => res.json());

export const popular = () =>
  fetch(popularUrl, options).then((res) => res.json());

export const topRated = () =>
  fetch(topRatedUrl, options).then((res) => res.json());

export const upcoming = () =>
  fetch(upcomingUrl, options).then((res) => res.json());

export const movieDetail = (id) => {
  const detailUrl = baseUrl + `movie/${id}` + "?language=ko-kr";
  return fetch(detailUrl, options).then((res) => res.json());
};
