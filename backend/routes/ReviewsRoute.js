const express=require("express");
const router=express.Router();

const{showReviews,
    addReview,
    deleteReview,
}=require("../controllers/ReviewsController.js")


router.get("/:mid",showReviews);
router.post("/:mid", addReview);
router.post("/:mid/delete", deleteReview);


module.exports=router