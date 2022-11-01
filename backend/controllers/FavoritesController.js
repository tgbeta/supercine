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

   const  addFavorite=(socket)=>{
    socket.on("movies",(data)=>{
        const pool = new Pool(dbCredentials);
        const Favorites=Object.values(data);

        Favorites.forEach((item)=>{
            if(item.Favorite != undefined){
                const user =item.userid ;
                const movieID = item.movieid;

                pool.query("INSERT INTO  tbWatchList(idUser, idmovie, isFavorite) VALUES($1,$2,$3)", [user, movietID, true])
                .then((result)=>result.rows)
                 .then(()=> showFavorites())
                 .catch((err)=>console.log(err))
                 .finally(()=>pool.end);
            }
        })

    })
    }

    
    const  deleteFavorite=(socket)=>{
        socket.on("delete",(data)=>{
            console.log('deleted',data)
            const pool = new Pool(dbCredentials);
            const Favorites=Object.values(data);

            Favorites.forEach((item)=>{
                if(item.Favorite ===null){
                    console.log("deleting")
                    const FavoriteID = item.id 
                    pool.query("UPDATE tbWatchList SET isFavorite = false , dtUpdate= current_date WHERE idWatchList= $1 ", [FavoriteID])
                    .then((result)=>result.rows)
                    .then(()=> showFavorites())
                    .catch((err)=>console.log(err))
                    .finally(()=>pool.end);

                }
            })
        })
        }
    


    
//=============================================

    module.exports={
        showFavorites,
        addFavorite,
        deleteFavorite,
    }


