const {dbCredentials}=require("../database/dbconfig")
const {Pool}=require("pg");

const  showWatchList=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const user = 1;

    pool.query("select * from GetWatchList($1)", [user])
    .then((result)=>result.rows)
     .then(
        (WatchLists)=> {
            const vWatchList = {}
           
            WatchLists.forEach( Watchlist =>{
                        vWatchList= {
                    	id:      Watchlist.id,
	                	movieid: Watchlist.movieid,
				        movie:   Watchlist.movie,
                        userid:  Watchlist.Userid,
				        user:    Watchlist.UserName,
                    }
            	
            } )

            res.json(vWatchList)
    }
    
    )
    .catch((err)=>console.log(err))
    .finally(()=>pool.end);
   }


//=============================================

   const  addWatchlist=(id)=>{

        const pool = new Pool(dbCredentials);
        const Watchlists=Object.values(data);

        Watchlists.forEach((item)=>{
            if(item.Watchlist != undefined){
                const user =item.userid ;
                const movieID = item.movieid;

                pool.query("CALL pAddWatchList($1, $2)",[user,movieID])
                .then((result)=>result.rows)
                 .then(()=> showWatchList(user))
                 .catch((err)=>console.log(err))
                 .finally(()=>pool.end);
            }
        })

    }

    
    const  deleteWatchlist=(id)=>{

            console.log('deleted',data)
            const pool = new Pool(dbCredentials);
            const Watchlists=Object.values(data);

            Watchlists.forEach((item)=>{
                if(item.Watchlist ===null){
                    console.log("deleting")
                    const WatchlistID = item.id 
                    pool.query("CALL pRemoveWatchlist($1)",[WatchlistID])
                    .then((result)=>result.rows)
                    .then(()=> showWatchlist(user))
                    .catch((err)=>console.log(err))
                    .finally(()=>pool.end);

                }
            })
        }
    


    
//=============================================

    module.exports={
        showWatchList,
        addWatchlist,
        deleteWatchlist,
    }


