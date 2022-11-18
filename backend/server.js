const express = require("express");
const cors = require("cors");
const http = require("http");
const { movieSearch } = require("./controllers/movies");
require("dotenv").config();

// Require for the socket.io
const server = express();
const dbserver = http.createServer(server);
const { Server } = require("socket.io");
const io = new Server(dbserver);
const {
  addFavorite,
  deleteFavorite,
} = require("./controllers/FavoritesController.js");
const moviesRouter = require("./routes/movies.js");

//server.get("/search", movieSearch);

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use("/movies", moviesRouter);

// Web sockets

io.on("connection", addFavorite);
io.on("connection", deleteFavorite);

server.listen(3001, () => console.log("server running on port 3001"));
