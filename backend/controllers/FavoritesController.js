const {dbCredentials}=require("../database/dbconfig")
const {Pool}=require("pg");

const  showFavorites=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const user = req.body.userID; 

    pool.query("select * from GetFavoriteList($1)", [user])
    .then((result)=>res.json(result.rows))
    .catch((err)=>console.log(err))
    .finally(()=>pool.end);
   }


//=============================================

   const  addFavorite=(req,res)=>{
        const pool = new Pool(dbCredentials);
        const user    = req.body.userID ;
        const movieID = req.body.movieID;

        pool.query("CALL pAddFavoriteList($1, $2)",[user,movieID])
            .then((result)=>result.rows)
            .then(()=> showFavorites(req,res))
            .catch((err)=>console.log(err))
            .finally(()=>pool.end);
        
    }

    
    const  deleteFavorite=(req,res)=>{
            console.log('deleted from Favorites',data)
            const pool = new Pool(dbCredentials);
            const favoriteid  = req.body.favoriteID ;

            pool.query("CALL pRemoveFavoriteList($1)",[favoriteid])
                .then((result)=>result.rows)
                .then(()=> showFavorites(req,res))
                .catch((err)=>console.log(err))
                .finally(()=>pool.end);
        }
    
    
//=============================================

    module.exports={
        showFavorites,
        addFavorite,
        deleteFavorite,
    }


