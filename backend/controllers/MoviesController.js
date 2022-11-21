const {dbCredentials}=require("../database/dbconfig")
const {Pool}=require("pg");


const  showMovies=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const mtitle = 'Gladiator';

    pool.query("select * from getMovie(0, $1)", [mtitle])
    .then((result)=>result.rows)
     .then(
        (Movies)=> {
            const vMovies = {}
           
            Movies.forEach( Movie =>{
                    vMovies= {
                    	movieid:   Movie.movieid,
	                	title:     Movie.movie,		
                        apiKey:    Movie.mapikey,
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
    const movieID = 1;

    pool.query("select * from getMovieGenre($1,'')", [movieID])
    .then((result)=>result.rows)
     .then(
        (MoviesGenre)=> {
            const vMoviesGenre = {}
           
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


   const  addMovie=(id)=>{

        const pool = new Pool(dbCredentials);
        const Movies=Object.values(data);

        Movies.forEach((item)=>{
            if(item.title != undefined){
                const mtitle =item.title ;
                const mapikey = item.apikey;
                const madult = item.adult;

                pool.query("CALL pNewMovie($1, $2, $3)",[mtitle,madult, mapikey])
                .then((result)=>result.rows)
                 .then(()=> showMovies(mtitle))
                 .catch((err)=>console.log(err))
                 .finally(()=>pool.end);
            }
        })

    }
    
//=============================================

const  addMovieGenre=(id)=>{
    const pool = new Pool(dbCredentials);
    const MoviesGenre=Object.values(data);

    MoviesGenre.forEach((item)=>{
        if(item.movieID != undefined){
            const movieID =item.movieID ;
            const mgenre = item.genre;

            pool.query("CALL pNewMovieGenre($1, $2)",[movieID,mgenre])
            .then((result)=>result.rows)
             .then(()=> showMoviesGenre(movieID))
             .catch((err)=>console.log(err))
             .finally(()=>pool.end);
        }
    })

}

//=============================================

    module.exports={
        showMovies,
        showMoviesGenre,
        addMovie,
        addMovieGenre,
    }

