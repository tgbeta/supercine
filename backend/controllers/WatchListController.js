const {dbCredentials}=require("../database/dbconfig")
const {Pool}=require("pg");

const  showWatchList=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const user    = req.body.userID ;
    pool.query("select * from GetWatchList($1)", [user])
    .then(       (result)=>{
        console.log('results', result.rows);
        res.json(result.rows)}
    )
    .catch((err)=>console.log("err",err))
    .finally(()=>pool.end);
   }


//=============================================

   const  addWatchList=(req,res)=>{
        const pool = new Pool(dbCredentials);
        const user    = req.body.userID ;
        const movieID = req.body.movieID;
       // console.log('teste w', req.body)    ;

         pool.query("CALL pAddWatchList($1, $2)",[user,movieID])
                .then((result)=>result.rows)
                .then(()=> showWatchList(req,res))
                .catch((err)=>console.log(err))
                .finally(()=>pool.end);
        
    }

    
    const  deleteWatchList=(req,res)=>{
            const pool = new Pool(dbCredentials);
            const watchlistid    = req.body.watchlistID ;

            pool.query("CALL pRemoveWatchlist($1)",[watchlistid])
             .then((result)=>result.rows)
             .then(()=> showWatchList(req,res))
             .catch((err)=>console.log(err))
             .finally(()=>pool.end);

        }
    


    
//=============================================

    module.exports={
        showWatchList,
        addWatchList,
        deleteWatchList,
    }


