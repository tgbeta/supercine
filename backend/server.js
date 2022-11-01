const express = require("express");
const { movieSearch } = require("./controllers/search.js");
require("dotenv").config();

const cors = require('cors');
// Require for the socket.io
const http=require('http')
const dbserver = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(dbserver);
const{addFavorite,deleteFavorite}=require('./controllers/FavoritesController.js')


const server = express();

server.get("/search", movieSearch);

server.listen(3001, () => console.log("server running on port 3001"));




app.use(cors({
    origin:"*",
    credentials:true,
}
))


// Web sockets

io.on("connection",addFavorite)
io.on("connection",deleteFavorite)

