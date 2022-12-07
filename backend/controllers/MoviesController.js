const {dbCredentials}=require("../database/dbconfig")
const {Pool}=require("pg");

const  showMovies=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const mtitle = req.body.movieTitle ;

    pool.query("select * from getMovie(0, $1)", [mtitle])
    .then((result)=>result.rows)
     .then(
        (Movies)=> {
            let vMovies = {}
           
            Movies.forEach( Movie =>{
                    vMovies= {
                    	movieid:     Movie.movieid,
	                	title:       Movie.movie,		
                        apiKey:      Movie.mapikey,
                        posterpath:  Movie.mposterpath, 
                        trailerlink: Movie.mtrailerlink,
                        dtreleased:  Movie.mdtreleased,
                        genres:    [],
                    }
            	
            } )
            res.json(vMovies)
    }
    
    )
    .catch((err)=>console.log(err))
    .finally(()=>pool.end);
   }


//=============================================

const  showMoviesGenre=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const movieID = req.body.movieID;

    pool.query("select * from getMovieGenre($1,'')", [movieID])
    .then((result)=>result.rows)
     .then(
        (MoviesGenre)=> {
            let vMoviesGenre = {}
           
            MoviesGenre.forEach( MoviesGenre =>{
                vMoviesGenre= {
                       genre: MoviesGenre.genre,
                    }
            	
            } )
            res.json(vMoviesGenre)
    }
    
    )
    .catch((err)=>console.log(err))
    .finally(()=>pool.end);
   }


//=============================================

   const  addMovie=(req,res)=>{

        const pool = new Pool(dbCredentials);
        const mtitle  = req.body.movieTitle ;
        const mapikey = req.body.movieapiID;
        const madult  = req.body.adult;
        const mposterpath =  req.body.posterpath; 
        const mtrailerlink = req.body.trailerlink;
        const mdtreleased =  req.body.dtreleased;

        pool.query("CALL pNewMovie($1, $2, $3, $4, $5, $6)",[mtitle,madult, mapikey, mposterpath, mtrailerlink, mdtreleased])
           .then((result)=>result.rows)
           .then(()=> showMovies(req,res))
           .catch((err)=>console.log(err))
           .finally(()=>pool.end);
     }
    
//=============================================

const  addMovieGenre=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const movieID =req.body.movieID ;
    const mgenre = req.body.genre;

    pool.query("CALL pNewMovieGenre($1, $2)",[movieID,mgenre])
            .then((result)=>result.rows)
             .then(()=> showMoviesGenre(req,res))
             .catch((err)=>console.log(err))
             .finally(()=>pool.end);

}

//=============================================

    module.exports={
        showMovies,
        showMoviesGenre,
        addMovie,
        addMovieGenre,
    }

