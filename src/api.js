const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko=kr";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDczOGFhNWYzYTA4NGZjZjcxYjgyYzUzN2VkYjAxMCIsInN1YiI6IjY1NGIzYTFiNTMyYWNiNTMzYTEzZjgzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9t2x0yh11EgJzBNd8W406DQbWqOXPm5idJY3DvOzByk",
  },
};

export const nowPlaying = () =>
  fetch(nowPlayingUrl, options).then((res) => res.json());
