const axios = require("axios");

const movieSearch = (req, res) => {
  console.log(req.query);

  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB}&query=${req.query.movie}`
    )
    .then((response) => {
      console.log("teste", response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { movieSearch };
