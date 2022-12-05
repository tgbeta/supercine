 
const express=require("express");
const router=express.Router();


const{showMovies,
    addMovie,
}=require("../controllers/MoviesController.js")


router.get("/",showMovies);
router.post("/", addMovie);


module.exports=router