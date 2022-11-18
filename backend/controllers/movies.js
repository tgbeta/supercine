const axios = require("axios");

const movieSearch = (req, res) => {
  console.log(req.query);

  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB}&query=${req.query.movie}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const moviePopular = (req, res) => {
  console.log(req.query);

  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const movieUpcoming = (req, res) => {
  console.log(req.query);

  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { movieSearch, moviePopular, movieUpcoming };
