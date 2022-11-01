CREATE or REPLACE FUNCTION GetUser(uID INTEGER,  uEmail VARCHAR(80))  
RETURNS table (userName varchar(100)) AS
$$
BEGIN
RETURN QUERY
 select nmUser as user 
 from tbuser where dsemail= uEmail or iduser = uID;
END
$$
LANGUAGE plpgsql;


select * FROM getUser(1,'cleliamarcia@gmail.com')
select * FROM getUser(1,'')
select * FROM getUser(0,'cleliamarcia@gmail.com')
select * FROM getUser(2,null)

--======================================================================================

CREATE or REPLACE FUNCTION GetMovie(mID INTEGER,  title VARCHAR(100), genre varchar(60)) 
RETURNS table (movieId integer, movie varchar(100)) AS
$$
BEGIN
RETURN QUERY
 select distinct m.idMovie, dsTitle 
 from tbMovie m 
 	left join tbMovieGenre mg on m.idmovie = mg.idmovie
	left join tbGenre g on mg.idgenre = g.idgenre
 where m.idmovie = mID or dsTitle = title  or g.tpGenre = genre;
END
$$
LANGUAGE plpgsql;


select * FROM GetMovie(1,'',null )  --byID
select * FROM GetMovie(0,'Pinocchio',null)  --byTitle
select * FROM GetMovie(0,'','Drama')  --byCategory


--======================================================================================

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


select * from GetWatchList(1)  ----by UserID


--======================================================================================

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


select * from GetFavoriteList(1) --by UserID

--======================================================================================

CREATE or REPLACE FUNCTION GetReview(mID INTEGER) 
RETURNS table (id integer, userId integer, userName varchar(100), movieId integer, movie varchar(100), review text, rating integer) AS
$$
BEGIN
RETURN QUERY
 select r.idReview as id,  u.idUser, u.nmUser,  m.idMovie, m.dsTitle , dscomment as review, nrrate as rating
 from tbUser u 
     	inner join tbReview r on u.idUser = r.idUser
        inner join tbMovie m on r.idmovie = m.idmovie 
where m.idMovie = mID;
END
$$
LANGUAGE plpgsql;



select * from GetReview(4)  --byMovieID

