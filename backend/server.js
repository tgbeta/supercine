const FavoritesRoute = require("./routes/FavoritesRoute.js");
const WatchListRoute = require("./routes/WatchListRoute.js");
const ReviewsRoute = require("./routes/ReviewsRoute.js");
const UsersRoute = require("./routes/UsersRoute.js");
const MoviesRoute = require("./routes/moviesRoute.js");

const express = require("express");
const cors = require("cors");
const http = require("http");
require("dotenv").config();

const server = express();

//const dbserver = http.createServer(server);

const moviesRouter = require("./routes/movies.js");
const path = require("path");

console.log("path", path.join(__dirname, "build/static"));

server.use(express.static(path.join(__dirname, "build")));

server.use(express.urlencoded({ extended: true }));

server.use(express.json());

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use("/movies", moviesRouter);

server.use("/moviesdb", MoviesRoute);

server.use("/users", UsersRoute);

server.use("/favorites", FavoritesRoute);

server.use("/watchlist", WatchListRoute);

server.use("/reviews", ReviewsRoute);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

server.listen(3001, () => console.log("server running on port 3001"));
