const FavoritesRoute = require('./routes/FavoritesRoute.js')
const WatchListRoute = require('./routes/WatchListRoute.js')
const ReviewsRoute = require('./routes/ReviewsRoute.js')

const express = require("express");
const cors = require("cors");
const http = require("http");
const { movieSearch } = require("./controllers/movies");
require("dotenv").config();

const cors = require('cors');
const http=require('http')

const server = express();
server.get("/search", movieSearch);

app.use(cors({
    origin:"*",
    credentials:true,
}
))

server.get("/search", movieSearch);

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(
    '/favorites', FavoritesRoute
)

app.use(
  '/watchlist', WatchListRoute
)

app.use(
  '/reviews', ReviewsRoute
)


server.listen(3001, () => console.log("server running on port 3001"));
