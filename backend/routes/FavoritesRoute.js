 
const express=require("express");
const router=express.Router();


const{showFavorites,
    addFavorite,
    deleteFavorite,
}=require("../controllers/FavoritesController.js")


router.post("/",showFavorites);
router.post("/add", addFavorite);
router.post("/delete", deleteFavorite);


module.exports=router

