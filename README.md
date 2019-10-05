# Bad Movies

A practice tool designed to cover the fundamentals of fullstack application development

Learn the fundamentals of application structure and database integration by making a web app that renders the most horrible movies as listed on 'themoviedb.org' based on certain search criteria, namely genre. The user should be able to save a movie to their 'favorites' list and delete movies from this list.

### Basic functionality: 

[ ] User should be able to search for the worst movies from any of the official genres listed on 'themoviedb.org' //then get request to movie api

[ ] User should be given this official list of genres to select from and search with, filtering by selected genre //reqest object filters with genre and api responds with movie objects that contain that genre filteredGenre = req.body.genre (check api requirements)

[ ] A search should find and display a limited list of movies sorted by rating in ascending order, showing the movies with the worst ratings first (figure out how to modify the API endpoint/route to do so)
//does the api have a specific endpoint that lists highest rated movies first?

/discover/movie?sort_by=popularity.desc to search by popularity




[ ] User should be able to click on any movie in order to save it to their favorites list (mySQL database, you must make your own Schema) //make favorites route connecting to a favorites table in mySQL

[ ] If a user has navigated to their favorites page, clicking on a movie should delete it from their favorites (unlike on the main page, where clicking on a movie adds it to their favorites list) onClick, set state to true and false depending upon which route they are making the request from 

[ ] Store your data in MySQL db (or MongoDB if/when you feel comfortable)
//post all queries to db

### The API for the application, where you will query for worst movies and all official genres:

https://developers.themoviedb.org/3/getting-started/introduction
//stored API key in config
158ba3cbce28a49a0d8c7b0e7a12ea61

--------

*To start the server and start webpack check out package.json*

Credits:
Peter Park
