const {dbCredentials}=require("../database/dbconfig")
const {Pool}=require("pg");

const  showReviews=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const movieid = 1;

    pool.query("select * from getReview($1)", [movieid])
    .then((result)=>result.rows)
     .then(
        (Reviews)=> {
            const vReviews = {}
           
            Reviews.forEach( Review =>{
                     	vReviews= {
                    	id:      Review.id,
	                	movieid: Review.movieid,
				        movie:   Review.movie,
                        userid:  Review.Userid,
				        user:    Review.UserName,
                        review:    Review.review,
                        rating:    Review.rating,
                    }
            	
            } )

            res.json(vReviews)
    }
    
    )
    .catch((err)=>console.log(err))
    .finally(()=>pool.end);
   }


//=============================================

   const  addReview=(id)=>{

        const pool = new Pool(dbCredentials);
        const Reviews=Object.values(data);

        Reviews.forEach((item)=>{
            if(item.Review != undefined){
                const user =item.userid ;
                const movieID = item.movieid;
                const vreview = item.review;
                const rating = item.rating;

                pool.query("CALL pAddReview($1, $2, $3, $4)",[user,movieID, vreview,rating ])
                .then((result)=>result.rows)
                 .then(()=> showReviews(movieID))
                 .catch((err)=>console.log(err))
                 .finally(()=>pool.end);
            }
        })

    }

    
    const  deleteReview=(id)=>{

            console.log('deleted',data)
            const pool = new Pool(dbCredentials);
            const Reviews=Object.values(data);

            Reviews.forEach((item)=>{
                if(item.Review ===null){
                    console.log("deleting")
                    const ReviewID = item.id 
                    pool.query("CALL pRemoveReview($1)",[ReviewID])
                    .then((result)=>result.rows)
                    .then(()=> showReviews(movieID))
                    .catch((err)=>console.log(err))
                    .finally(()=>pool.end);

                }
            })
        }
    


    
//=============================================

    module.exports={
        showReviews,
        addReview,
        deleteReview,
    }


