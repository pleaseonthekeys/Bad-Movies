const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

module.exports = {

    //search for genre and get list
    searchByGenre: (genreId, handler) => {

        // let genre = 'horror'
        let endpoint =
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=200&with_genres=${genreId}`
            request(endpoint, (err, response, body) => {
                handler(err, JSON.parse(body))
            });
           
        //how do I build you out!?
    },

    getGenreList: (handler) => {
        let endpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
        // return axios.get(endpoint)
        //     .then((data) => {
        //         handler(JSON.parse(data))
        //     })
        //     .catch(err => {
        //         console.log('error getting list of genres', err)
        //     })
        request(endpoint, (err, response, body) => {
            handler(err, JSON.parse(body))
        });
    }






}