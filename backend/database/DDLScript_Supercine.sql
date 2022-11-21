-- Database: dbSupercine

-- DROP DATABASE IF EXISTS "dbSupercine";

CREATE DATABASE "dbSupercine"
    WITH
    OWNER = "usrSupercine"
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
	
	
---TABLES  ================================================================================================

CREATE TABLE tbUser( 
idUser integer not null primary key,
nmUser varchar(50) not null,
dsEmail varchar(80) not null,
dtBirth date null,
dtInsert date not null,
dtUpdate date NULL,
stUser boolean not null
);



--========================================================================


CREATE TABLE tbMovie( 
idMovie integer NOT NULL PRIMARY KEY,
dsTitle varchar(100) NOT NULL,
isAdult boolean NOT NULL,
apiKey varchar(100) NULL
);


--========================================================================

CREATE TABLE tbGenre( 
idGenre integer NOT NULL PRIMARY KEY,
tpGenre varchar(60) NOT NULL
);



--========================================================================

CREATE TABLE tbMovieGenre( 
idGenre integer NOT NULL,
idMovie integer NOT NULL
);


--========================================================================

CREATE TABLE tbWatchList( 
idWatchList integer NOT NULL PRIMARY KEY,
idUser integer NOT NULL,
idMovie integer NOT NULL,
isWatched boolean NOT NULL,
isFavorite boolean NOT NULL,
dtInsert date NOT NULL,
dtUpdate date  NULL
);



--========================================================================

CREATE TABLE tbReview( 
idReview integer NOT NULL PRIMARY KEY,
idUser integer NOT NULL,
idMovie integer NOT NULL,
nrRate integer NOT NULL,   -- 1 to 5
dsComment text NULL,
dtInsert date NOT NULL,
stReview boolean NOT NULL
);




---FUNCTIONS==============================================================================================

CREATE or REPLACE FUNCTION GetUser(uID INTEGER,  uEmail VARCHAR(80))  
RETURNS table (userId integer, userName varchar(100)) AS
$$
BEGIN
RETURN QUERY
 select iduser, nmUser 
 from tbuser where dsemail= uEmail or iduser = uID;
END
$$
LANGUAGE plpgsql;


--========================================================================


CREATE or REPLACE FUNCTION GetMovie(mID INTEGER,  title VARCHAR(100)) 
RETURNS table (movieId integer, movie varchar(100), mapikey varchar(100) ) AS
$$
BEGIN
RETURN QUERY
 select distinct m.idMovie, dsTitle, apikey 
 from tbMovie m 
 where m.idmovie = mID or dsTitle = title;
END
$$
LANGUAGE plpgsql;


--========================================================================

CREATE or REPLACE FUNCTION GetMovieGenre(mID INTEGER,  mgenre varchar(60)) 
RETURNS table (movieId integer, movie varchar(100), genre varchar(100)) AS
$$
BEGIN
RETURN QUERY
 select distinct m.idMovie, dsTitle,  g.tpGenre 
 from tbMovie m 
 	inner join tbMovieGenre mg on m.idmovie = mg.idmovie
	inner join tbGenre g on mg.idgenre = g.idgenre
 where m.idmovie = mID  or g.tpGenre = mgenre;
END
$$
LANGUAGE plpgsql;


--========================================================================


CREATE or REPLACE FUNCTION GetWatchList(uID INTEGER) 
RETURNS table (id integer, userId integer, userName varchar(100), movieId integer, movie varchar(100)) AS
$$
BEGIN
RETURN QUERY
 select w.idWatchlist as id, u.idUser, u.nmUser,  m.idMovie, m.dsTitle 
 from tbUser u 
     	inner join tbWatchList w on u.idUser = w.idUser
        inner join tbMovie m on w.idmovie = m.idmovie 
where u.idUser = uID and w.isWatched = false;
END
$$
LANGUAGE plpgsql;



--========================================================================


CREATE or REPLACE FUNCTION GetFavoriteList(uID INTEGER) 
RETURNS table (id integer, userId integer, userName varchar(100), movieId integer, movie varchar(100)) AS
$$
BEGIN
RETURN QUERY
 select w.idWatchlist as id, u.idUser, u.nmUser,  m.idMovie, m.dsTitle 
 from tbUser u 
     	inner join tbWatchList w on u.idUser = w.idUser
        inner join tbMovie m on w.idmovie = m.idmovie 
where u.idUser = uID and w.isFavorite = true;
END
$$
LANGUAGE plpgsql;


--========================================================================



CREATE or REPLACE FUNCTION GetReview(mID INTEGER) 
RETURNS table (id integer, userId integer, userName varchar(100), movieId integer, movie varchar(100), review text, rating integer) AS
$$
BEGIN
RETURN QUERY
 select r.idReview as id,  u.idUser, u.nmUser,  m.idMovie, m.dsTitle , dscomment as review, nrrate as rating
 from tbUser u 
     	inner join tbReview r on u.idUser = r.idUser
        inner join tbMovie m on r.idmovie = m.idmovie 
where m.idMovie = mID and r.streview = true;
END
$$
LANGUAGE plpgsql;





---PROCEDURES============================================================================================

CREATE OR REPLACE PROCEDURE pNewUser(uemail varchar(100), uname varchar(100), ubirth date)
AS
$$
DECLARE
    newUser INTEGER;
	
BEGIN

  IF EXISTS(select iduser
			from tbuser 
			where dsemail = uemail)
  THEN
    RAISE NOTICE 'User already exists %', newUser;
	
  ELSE
  
    newUser = (SELECT max(iduser) FROM tbuser);
   
    IF (newUser IS NULL) THEN
     newuser = 1;
    ELSE
	 newuser = newuser + 1;
    END IF;
    
     insert into tbuser(iduser, nmuser, dsemail, dtbirth, dtinsert, stuser) 
	 values(newuser, uname, uemail, ubirth, current_date, true) ; 

    RAISE NOTICE 'New User Inserted: %', newUser;
  END IF;

END;
$$ LANGUAGE plpgsql;


--========================================================================


CREATE OR REPLACE PROCEDURE pNewMovie(mtitle varchar(100), madult boolean, mapikey varchar(100))
AS
$$
DECLARE
    newMovie INTEGER;
	
BEGIN

  IF EXISTS(select idmovie from tbmovie where dstitle = mtitle)  THEN
    RAISE NOTICE 'Movie already exists %', newMovie;
	
  ELSE
  
    newMovie = (SELECT max(idmovie) FROM tbmovie);
   
    IF (newMovie IS NULL) THEN
     newMovie = 1;
    ELSE
	 newMovie = newMovie + 1;
    END IF;
    
     insert into tbmovie(idmovie, dstitle, isadult, apikey) 
	 values(newMovie, mtitle, madult, mapikey) ; 

    RAISE NOTICE 'New Movie Inserted: %', newMovie;
  END IF;

END;
$$ LANGUAGE plpgsql;


--========================================================================

CREATE OR REPLACE PROCEDURE pNewMovieGenre(mID integer, mgenre varchar(100) )
AS
$$
DECLARE
    newGenre INTEGER;
	
BEGIN

  newGenre = (SELECT max(idgenre) FROM tbgenre where tpgenre =  mgenre );
   
    IF (newGenre > 0 ) THEN
	
      IF EXISTS(select idmovie from tbmoviegenre where idmovie = mId and idgenre = newGenre )  THEN
    	RAISE NOTICE 'Movie genre already exists %', newMovie;
	  ELSE
   		insert into tbmoviegenre(idmovie, idgenre) 
	    values(mid, newGenre) ; 
      END IF;
    ELSE
	
	   newGenre = (SELECT max(idgenre) + 1 FROM tbgenre);
	   
	   insert into tbgenre(idgenre, tpgenre) values (newGenre, mgenre);
	   
	   insert into tbmoviegenre(idmovie, idgenre) 
	    values(mid, newGenre) ; 
	 
    END IF;
    
    RAISE NOTICE 'New Movie Genre Inserted: %', newGenre;
 
END;
$$ LANGUAGE plpgsql;





--INSERT WATCHLIST

CREATE OR REPLACE PROCEDURE pAddWatchList(uID integer, mID integer)
AS
$$
DECLARE
    ListId INTEGER;
	
BEGIN

  IF EXISTS(select idwatchlist from tbWatchList where iduser = uid and idmovie = mid )  THEN
 
	UPDATE tbWatchList set iswatched = false, dtupdate = current_date where iduser = uid and idmovie = mid;
	
	RAISE NOTICE  'Movie already in the WatchList %', ListId;
	
  ELSE
  
    ListId = (SELECT max(idWatchlist) FROM tbWatchList);
   
    IF (ListId IS NULL) THEN
     ListId = 1;
    
    ELSE
	 ListId = ListId + 1;
    END IF;
    
     insert into tbWatchList(idWatchlist, idmovie, iduser, iswatched,isfavorite, dtinsert) 
	 values(ListId, mid, uid,false,false, current_date) ; 

    RAISE NOTICE 'New Movie Inserted in the WatchList : %', ListId;
  END IF;

END;
$$ LANGUAGE plpgsql;


--REMOVE WATCHLIST

CREATE OR REPLACE PROCEDURE pRemoveWatchList(listId integer)
AS
$$

BEGIN

  IF EXISTS(select idwatchlist from tbWatchList where idwatchlist = listId )  THEN
 
	UPDATE tbWatchList set iswatched = true, dtupdate = current_date where idwatchlist = listId;
	
    RAISE NOTICE 'Movie removed from WatchList';
  END IF;

END;
$$ LANGUAGE plpgsql;






--INSERT FAVORITE
CREATE OR REPLACE PROCEDURE pAddFavoriteList(uID integer, mID integer)
AS
$$
DECLARE
    ListId INTEGER;
	
BEGIN

  IF EXISTS(select idwatchlist from tbWatchList where iduser = uid and idmovie = mid)  THEN
        
	UPDATE tbWatchList set iswatched = true,  isFavorite = true, dtupdate= current_date where iduser = uid and idmovie = mid;

	RAISE NOTICE 'Movie already in the FavoriteList %', ListId;
 
 ELSE
  
    ListId = (SELECT max(idWatchlist) FROM tbWatchList);
   
    IF (ListId IS NULL) THEN
     ListId = 1;
    
    ELSE
	 ListId = ListId + 1;
    END IF;
    
     insert into tbWatchList(idWatchlist, idmovie, iduser, iswatched, isfavorite, dtinsert) 
	 values(ListId, mid, uid,true, true, current_date) ; 

    RAISE NOTICE 'Movie Inserted in the FavoriteList : %', ListId;
  END IF;

END;
$$ LANGUAGE plpgsql;

--REMOVE FAVORITE LIST

CREATE OR REPLACE PROCEDURE pRemoveFavoriteList(listID integer)
AS
$$
BEGIN

  IF EXISTS(select idwatchlist from tbWatchList where idwatchlist = listId)  THEN
        
	UPDATE tbWatchList set isFavorite = false, dtupdate= current_date where idwatchlist = listId;

	RAISE NOTICE 'Movie removed from FavoriteList %', ListId;
  END IF;

END;
$$ LANGUAGE plpgsql;




--INSERT REVIEW

CREATE OR REPLACE PROCEDURE pAddReview(uID integer, mID integer, review text, rating integer)
AS
$$
DECLARE
    ReviewId INTEGER;
	
BEGIN

  IF EXISTS(select idReview from tbReview where iduser = uid and idmovie = mid)  THEN
        
	UPDATE tbReview set dscomment = review,  nrrate = rating, dtinsert= current_date where iduser = uid and idmovie = mid;

	RAISE NOTICE 'Movie already in the Review %', ReviewId;
 
 ELSE
  
    ReviewId = (SELECT max(idReview) FROM tbReview);
   
    IF (ReviewId IS NULL) THEN
     ReviewId = 1;
    
    ELSE
	 ReviewId = ListId + 1;
    END IF;
    
     insert into tbReview(idReview, idmovie, iduser, dscomment, nrrate, streview, dtinsert) 
	 values(ReviewId, mid, uid,  review , rating, true, current_date) ; 

    RAISE NOTICE 'Movie Inserted in the Review : %', ReviewId;
  END IF;

END;
$$ LANGUAGE plpgsql;



--REMOVE REVIEW

CREATE OR REPLACE PROCEDURE pRemoveReview(rID integer)
AS
$$
	
BEGIN

  IF EXISTS(select idReview from tbReview where idreview = rID )  THEN
        
	UPDATE tbReview set  streview = false where idreview = rID;

	RAISE NOTICE 'Movie removed from Review %', ReviewId;
   END IF;

END;
$$ LANGUAGE plpgsql;

