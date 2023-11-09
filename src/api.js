const fetch = require("node-fetch");

const url = "https://api.themoviedb.org/3/authentication";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDczOGFhNWYzYTA4NGZjZjcxYjgyYzUzN2VkYjAxMCIsInN1YiI6IjY1NGIzYTFiNTMyYWNiNTMzYTEzZjgzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9t2x0yh11EgJzBNd8W406DQbWqOXPm5idJY3DvOzByk",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
