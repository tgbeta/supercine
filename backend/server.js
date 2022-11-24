const FavoritesRoute = require("./routes/FavoritesRoute.js");
const WatchListRoute = require("./routes/WatchListRoute.js");
const ReviewsRoute = require("./routes/ReviewsRoute.js");

const express = require("express");
const cors = require("cors");
const http = require("http");
require("dotenv").config();

const server = express();
const dbserver = http.createServer(server);
const { Server } = require("socket.io");
const io = new Server(dbserver);
const {
  addFavorite,
  deleteFavorite,
} = require("./controllers/FavoritesController.js");
const moviesRouter = require("./routes/movies.js");

server.use(express.urlencoded({ extended: true }));

server.use(express.json());

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use("/movies", moviesRouter);

// Web sockets
server.use("/favorites", FavoritesRoute);

server.use("/watchlist", WatchListRoute);

server.use("/reviews", ReviewsRoute);

server.listen(3001, () => console.log("server running on port 3001"));
