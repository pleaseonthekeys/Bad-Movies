const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');
const sqlDb = require('../../db/sql');//use this if I choose not to separate models from controllers


//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre   
    let genreId = req.query.id
    console.log(genreId);
    // let genreId = 53;
    console.log(genreId)
    // let genreId = 53;
    apiHelpers.searchByGenre(genreId, (err, results) => {
      if (err) {
        console.log('error getting search', err)
        res.sendStatus(500)
      } else {
        console.log('successful search')
        res.send(results)
      }
    })

    // use this endpoint to search for movies by genres, you will need an API key
    // .genre_ids
    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API
  },

  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    apiHelpers.getGenreList((err, results) => {
      if (err) {
        console.log('error getting genre list', err)
        res.sendStatus(500)
      } else {
        console.log('successfully queried for genre list')
        res.send(results.genres) //.name property accesses names for front end, .id property accesses lsits of movies in that genre
      }
    });
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
  },
  saveMovie: (req, res) => {

    let sql = `INSERT INTO favorites (movie_name) VALUES (?)`
    let params = req.body.movie_name;
    sqlDb.query(sql, params, (err, results) => {
      if (err) {
        console.log('error querying favorites', err)
        res.sendtatus(500)
      } else {
        console.log('successful save query to favorites')
        res.status(200).send(results)
      }
    })

  },
  deleteMovie: (req, res) => {
    let params = req.body.movie_name
    let sql = `DELETE FROM favorites WHERE movie_name = ?`
    sqlDb.query(sql, params, (err, results) => {
      if (err) {
        console.log('error deleting from favorites'.err);
        res.sendStatus(500)
      } else {
        console.log('successfully deleted from favorites')
        res.send(results)
      }
    })
  }
}