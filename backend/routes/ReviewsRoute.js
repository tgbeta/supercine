const express=require("express");
const router=express.Router();

const{showReviews,
    addReview,
    deleteReview,
}=require("../controllers/ReviewsController.js")


router.post("/",showReviews);
router.post("/add", addReview);
router.post("/delete", deleteReview);


module.exports=router