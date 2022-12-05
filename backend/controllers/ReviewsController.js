const {dbCredentials}=require("../database/dbconfig")
const {Pool}=require("pg");

const  showReviews=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const movieid = req.body.movieID;

    pool.query("select * from getReview($1)", [movieid])
    .then((result)=>res.json(result.rows))
    .catch((err)=>console.log(err))
    .finally(()=>pool.end);
   }


//=============================================

   const  addReview=(req,res)=>{

        const pool = new Pool(dbCredentials);
        const user    = req.body.userID;
        const movieid = req.body.movieID;
        const vreview = req.body.review;
        const rating  = req.body.rate;

        pool.query("CALL pAddReview($1, $2, $3, $4)",[user, movieid, vreview,rating ])
                .then((result)=>result.rows)
                 .then(()=> showReviews(req,res))
                 .catch((err)=>console.log(err))
                 .finally(()=>pool.end);
           
    }

    
    const  deleteReview=(req,res)=>{

            console.log('deleted Review',data)
            const pool = new Pool(dbCredentials);
            const reviewid = req.body.ReviewID 
            
            pool.query("CALL pRemoveReview($1)",[reviewid])
                    .then((result)=>result.rows)
                    .then(()=> showReviews(req,res))
                    .catch((err)=>console.log(err))
                    .finally(()=>pool.end);

            
        }
    


    
//=============================================

    module.exports={
        showReviews,
        addReview,
        deleteReview,
    }


