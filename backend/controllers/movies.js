const axios = require("axios");

const movieSearch = (req, res) => {
//  console.log(req.query);

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
  //console.log("body", req.body.movieID);
  try {
    const responseDetails = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.body.movieID}?api_key=${process.env.REACT_APP_TMDB}`
    );
    const responseTrailer = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.body.movieID}/videos?api_key=${process.env.REACT_APP_TMDB}`
    );

    let trailerLink = "";

   // console.log("trailer", responseTrailer.data.results);
   // console.log("genres", responseDetails.data.genres);

    for (i = 0; i < responseTrailer.data.results.length; i++) {
      if (responseTrailer.data.results[i].type == "Trailer") {
        const trailerKey = responseTrailer.data.results[i].key;
        trailerLink = `https://www.youtube.com/embed/${trailerKey}`;
      }
    }

    //console.log("details post", trailerLink);

    let responseDetailsMovie = {
      ...responseDetails.data,
      trailer: trailerLink,
      genres: responseDetails.data.genres.map((genre) => genre.name),
    };

   // console.log("response obj", responseDetailsMovie);

    res.json(responseDetailsMovie);
  } catch (err) {
    console.log("erro movieDetails", err);
  }
};


module.exports = { movieSearch, moviePopular, movieUpcoming, movieDetails };
