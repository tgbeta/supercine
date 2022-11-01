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

CREATE SEQUENCE public."sqUser"
    INCREMENT 1
    START 1
    OWNED BY tbuser.iduser;

ALTER SEQUENCE public."sqUser"
    OWNER TO "usrSupercine";


--========================================================================


CREATE TABLE tbMovie( 
idMovie integer NOT NULL PRIMARY KEY,
dsTitle varchar(100) NOT NULL,
isAdult boolean NOT NULL,
apiKey varchar(100) NULL
);

CREATE SEQUENCE public."sqMovie"
    INCREMENT 1
    START 1
    OWNED BY tbmovie.idmovie;

ALTER SEQUENCE public."sqMovie"
    OWNER TO "usrSupercine";

--========================================================================

CREATE TABLE tbGenre( 
idGenre integer NOT NULL PRIMARY KEY,
tpGenre varchar(60) NOT NULL
);


CREATE SEQUENCE public."sqGenre"
    INCREMENT 1
    START 1
    OWNED BY tbgenre.idgenre;

ALTER SEQUENCE public."sqGenre"
    OWNER TO "usrSupercine";

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
dtUpdate date NOT NULL
);


CREATE SEQUENCE public."sqWatchList"
    INCREMENT 1
    START 1
    OWNED BY tbWatchList.idWatchList;

ALTER SEQUENCE public."sqWatchList"
    OWNER TO "usrSupercine";

--========================================================================

CREATE TABLE tbReview( 
idReview integer NOT NULL PRIMARY KEY,
idUser integer NOT NULL,
idMovie integer NOT NULL,
nrRate integer NOT NULL,
dsComment text NULL,
dtInsert date NOT NULL,
stReview boolean NOT NULL
);


CREATE SEQUENCE public."sqReview"
    INCREMENT 1
    START 1
    OWNED BY tbreview.idreview;

ALTER SEQUENCE public."sqReview"
    OWNER TO "usrSupercine";
