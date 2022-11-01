const express=require("express");
const router=express.Router();

const{showFavorites,
    addFavorite,
    deleteFavorite,
}=require("../controllers/FavoritesController.js")


router.get("/",showFavorites);


module.exports=router

