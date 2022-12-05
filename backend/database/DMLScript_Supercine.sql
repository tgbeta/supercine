--USER
select * FROM getUser(0,'cleliamarcia@gmail.com')  -- by Email
select * FROM getUser(5,'')                        -- by UserID

--RETURNS:   userid, username, useremail, userage

-- INSERT A USER
CALL pNewUser('teste4@email.com', 'Teste4')

CALL pNewUser('cleliamarcia@gmail.com', 'Teste 2', '2022-01-02')

--======================================================================================
--MOVIE 
select * FROM getMovie(1,'' )              --byID
select * FROM getMovie(0,'Gladiator')  	   --byTitle


select * FROM getMovieGenre(0,'Drama')     --all movies byCategory
select * from getMovieGenre(6, '') ;       --all categories byMovie


-- INSERT A MOVIE
CALL pNewMovie('Gladiator', false, 'https:/api.themoviedb.org/3/movie/98')
CALL pNewMovie('Teste2', true, 'https:/api.themoviedb.org/3/movie/1001')


---INSERT MOVIE GENRES
CALL pNewMovieGenre(6, 'Action')
CALL pNewMovieGenre(6, 'Romance')



--======================================================================================

--WATCH LIST

select * from getWatchList(1)  ----by UserID


--INSERT WATCHLIST
CALL pAddWatchList(1, 6)   --uID, mID


--REMOVE WATCHLIST
CALL pRemoveWatchlist(5)   --listID



--======================================================================================
--FAVORITE LIST

select * from getFavoriteList(1) --by UserID


--INSERT FAVORITE
CALL pAddFavoriteList(1, 6)  --uID, mID

--REMOVE FAVORITE
CALL pRemoveFavoriteList(5)   --listID



--======================================================================================

--REVIEW

select * from getReview(4)  --byMovieID

--INSERT REVIEW
CALL pAddReview(1, 1, 'I liked it', 3 )


--REMOVE REVIEW
CALL pRemoveReview(2)








