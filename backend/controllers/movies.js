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

const movieDetails = async (req, res) => {
  console.log(req.body);
  try {
    const responseDetails = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.body.movieID}?api_key=${process.env.REACT_APP_TMDB}`
    );
    const responseTrailer = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.body.movieID}/videos?api_key=${process.env.REACT_APP_TMDB}`
    );

    console.log("genre", responseDetails.data);
    console.log("trailer", responseTrailer.data);
  } catch (err) {
    console.log("err");
  }
};

module.exports = { movieSearch, moviePopular, movieUpcoming, movieDetails };
