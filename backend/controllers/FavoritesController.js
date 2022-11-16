const {dbCredentials}=require("../database/dbconfig")
const {Pool}=require("pg");

const  showFavorites=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const user = 1;

    pool.query("select * from GetFavoriteList($1)", [user])
    .then((result)=>result.rows)
     .then(
        (Favorites)=> {
            const vFavorites = {}
           
            Favorites.forEach( Favorite =>{
                     	vFavorites= {
                    	id:      Favorite.id,
	                	movieid: Favorite.movieid,
				        movie:   Favorite.movie,
                        userid:  Favorite.Userid,
				        user:    Favorite.UserName,
                    }
            	
            } )

            res.json(vFavorites)
    }
    
    )
    .catch((err)=>console.log(err))
    .finally(()=>pool.end);
   }


//=============================================

   const  addFavorite=(id)=>{

        const pool = new Pool(dbCredentials);
        const Favorites=Object.values(data);

        Favorites.forEach((item)=>{
            if(item.Favorite != undefined){
                const user =item.userid ;
                const movieID = item.movieid;

                pool.query("CALL pAddFavoriteList($1, $2)",[user,movieID])
                .then((result)=>result.rows)
                 .then(()=> showFavorites(user))
                 .catch((err)=>console.log(err))
                 .finally(()=>pool.end);
            }
        })

    }

    
    const  deleteFavorite=(id)=>{

            console.log('deleted',data)
            const pool = new Pool(dbCredentials);
            const Favorites=Object.values(data);

            Favorites.forEach((item)=>{
                if(item.Favorite ===null){
                    console.log("deleting")
                    const FavoriteID = item.id 
                    pool.query("CALL pRemoveFavoriteList($1)",[FavoriteID])
                    .then((result)=>result.rows)
                    .then(()=> showFavorites(user))
                    .catch((err)=>console.log(err))
                    .finally(()=>pool.end);

                }
            })
        }
    


    
//=============================================

    module.exports={
        showFavorites,
        addFavorite,
        deleteFavorite,
    }


