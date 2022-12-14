 
const express=require("express");
const router=express.Router();


const{showMovies,
    addMovie,
    showMoviesUser,
}=require("../controllers/MoviesController.js")


router.get("/",showMovies);
router.post("/", addMovie);
router.post("/movieuser", showMoviesUser);


module.exports=router