Final Project | CICC
Group: Clelia | Tatiana | Vinicius

# Divide on the project

What is the project about?
In general about movies.
https://www.themoviedb.org/documentation/api

What is the goal of the project?
To help the user find good movies according to their own interests.
What is the target user?
Anyone interested in movies who has access to the internet.
Is there any existing project that you can use as a reference?
We found one in Brazil
https://www.adorocinema.com/

    	And other one from the API we are gonna use.

https://www.themoviedb.org/

# Everything begins with data

What is the data you can access or get?
User input
Favorite movie classification
Watch list
reviews
Seed in
Existing users
API
Movies, Images, Top Rated Popular
Movie classification
What assets do you need and from where to get it?
API

# User stories / User scenarios

What are the user stories?
Title: Search for movie
As a user I want to be able to look for movies I would like to watch.
Title: Add movie to watch list
As a user I want to be able to add the movies that I like to my personal watch list.
Title: Add movie to favorites
As a user I want to be able to add my favorite movies to a list I can review later.
Title: Add review to the movie
As a user I want to be able to review the movies I watched to share my opinion.

# MVP (Minimum Viable Product)

Minimum Viable Product (MVP) is a product with just enough features to satisfy early customers and provide feedback for future product development.
Some features that we could have added:
Movies search
Add/delete movies to a watch list
Add/delete movies to a favorite list
Add reviews

# Tech choices

What technologies will you use?
Libraries
Bootstrap
SASS
Axios
Front-end
React
Back-end
Node
Database
PostgreSQL

# ERD

- Entities are nouns. Identify the nouns in your user stories.
  Movie
  User
  Watch List
  Review
- Columns are attributes. Identify the attributes of each noun.
 User
    ID
    Name
    Email
    Date Birth
    Date Insert

 Movie
    ID
    Title
    apikey
    posterpath
    trailerlink
    dtReleased
    dtInsert
    
 MovieGenre
    Movie ID
    Genre ID
 
 Genre
    ID
    Genre
 
  
 Watch List
    ID
    User ID
    Movie ID
    is Watched
    is Favorite
    Date Insert
  
 Review
    ID
    User ID
    Movie ID
    Rate
    Comment
    Date Insert
  
- Identify the entities and relationships:
  - One to many
    Movie
    User
  - Many to many (create a join table)
    Watch List
    Review
- Draw the ERD  - https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=FinalProject_Supercine_ERDiagram.png#R7V1td6K[…]1%2FgU%3D

# Wireframes

Draw the wireframes
https://whimsical.com/final-project-34xZ1cvj8fCYryYyA1RgL1

# Page Structure

`/home`

if user is logged in:

- returns HTML with:
  - the site header
  - welcome text
  - search bar
  - top 10 movies
  - upcoming movies

if user is not logged in:

- returns HTML with:
  - the site header
  - welcome text
  - search bar
  - top 10 movies
  - upcoming movies

`/search`

if user is logged in:

- returns HTML with:
  - the results of the search

if user is not logged in:

- returns HTML with:
  - the results of the search

`/movies`

if user is logged in:

- returns HTML with:
  - information about the movie selected

if user is not logged in:

- returns HTML with:
  - information about the movie selected

`/list`

if user is logged in:

- returns HTML with:
  - returns a list about favorite movies
  - returns a list of to be watched movies

if user is not logged in:

- returns HTML with:
  - returns to page asking for login

# Route Checklist

### GET `favorite movie`

### GET `watch list`

### GET `reviews`

### POST `favorite movie`

### POST `watch list`

### POST `review`

