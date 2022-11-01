--SEEDS

--select * from tbuser;
INSERT INTO public.tbuser(iduser, nmuser, dsemail, dtbirth, dtinsert, dtupdate, stuser)
	VALUES (1, 'Clelia Miguel', 'cleliamarcia@gmail.com', '1978-05-16', current_date, null, true);
	

--select * from tbMovie
INSERT INTO public.tbmovie(idmovie, dstitle, isadult, apikey) VALUES (1, 'Fight Club', false, 'https:/api.themoviedb.org/3/movie/550');
INSERT INTO public.tbmovie(idmovie, dstitle, isadult, apikey) VALUES (2, 'Black Adam', false, 'https:/api.themoviedb.org/3/movie/436270');
INSERT INTO public.tbmovie(idmovie, dstitle, isadult, apikey) VALUES (3, 'Pinocchio', false, 'https:/api.themoviedb.org/3/movie/532639');
INSERT INTO public.tbmovie(idmovie, dstitle, isadult, apikey) VALUES (4, 'Gladiador', false, 'https:/api.themoviedb.org/3/movie/98');


--select * from tbGenre
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (1, 'Action');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (2, 'Adventure');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (3, 'Animation');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (4, 'Comedy');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (5, 'Crime');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (6, 'Documentary');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (7, 'Drama');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (8, 'Family');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (9, 'Fantasy');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (10, 'History');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (11, 'Horror');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (12, 'Music');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (13, 'Mystery');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (14, 'Romance');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (15, 'Science Fiction');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (16, 'TV Movie');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (17, 'Thriller');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (18, 'War');
INSERT INTO public.tbgenre(idgenre, tpgenre) VALUES (19, 'Western');
		`
--select * from tbMovieGenre
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (1,4);
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (1,7);
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (1,17);
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (2,1);
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (2,9);
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (2,15);
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (3,2);
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (3,8);
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (3,9);
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (4,1);
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (4,2);
INSERT INTO public.tbmoviegenre(idmovie, idgenre) VALUES (4,7);

--select * from tbWatchList
INSERT INTO public.tbwatchlist(idwatchlist, iduser, idmovie, iswatched, isfavorite, dtinsert, dtupdate)
	VALUES (1, 1, 1, false, false, current_date, null);

INSERT INTO public.tbwatchlist(idwatchlist, iduser, idmovie, iswatched, isfavorite, dtinsert, dtupdate)
	VALUES (2, 1, 2, false, false, current_date, null);
	

INSERT INTO public.tbwatchlist(idwatchlist, iduser, idmovie, iswatched, isfavorite, dtinsert, dtupdate)
	VALUES (3, 1, 3, true, false, current_date, null);
	

INSERT INTO public.tbwatchlist(idwatchlist, iduser, idmovie, iswatched, isfavorite, dtinsert, dtupdate)
	VALUES (4, 1, 4, true, true, current_date, '2022-11-02');	
	
	
--select * from tbReview
INSERT INTO public.tbreview(idreview, iduser, idmovie, nrrate, dscomment, dtinsert, streview)
	VALUES (1, 1, 4, 5, 'Best movie forever',current_date, true);

