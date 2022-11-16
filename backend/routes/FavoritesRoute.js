 
const express=require("express");
const router=express.Router();


const{showFavorites,
    addFavorite,
    deleteFavorite,
}=require("../controllers/FavoritesController.js")


router.get("/",showFavorites);
router.post("/:id", addFavorite);
router.post("/:id/delete", deleteFavorite);


module.exports=router

