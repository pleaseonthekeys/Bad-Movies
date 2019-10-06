import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import AnyComponent from './components/filename.jsx'
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ deway: "movies" }],
      favorites: [{ deway: "favorites" }],
      favoritesTitles: [],
      showFaves: false
    };

    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  getMovies(genreId) {
    //comes from options value
    // make an axios request to your server on the GET SEARCH endpoint
    //how do I set up the id query? this should be happening in my server
    return Axios.get(`/movies/search?id=${genreId}`, genreId) //this is not correct yet
      .then(({ data }) => {
        console.log("successful search from client", { movies: data });
        this.setState({ movies: data.results });
        console.log({ state_after_query: this.state });
      })
      .catch(err => {
        console.log("unsucessfuly search from client", err);
      });
  }

  saveMovie(favoriteMovie) {
    // same as above but do something diff
    this.setState({
      favorites: [...this.state.favorites, favoriteMovie],
      favoritesTitles: [...this.state.favoritesTitles, favoriteMovie.title]
    });
    let params = { movie_name: favoriteMovie.title };
    return Axios.post("/movies/save", params)
      .then(() => {
        console.log("successful post to favorites from client");
      })
      .catch(err => {
        console.log("unsuccesful post from client");
      });
  }

  deleteMovie(unfavorableMovie) {
    // same as above but do something diff
    let favesArr = this.state.favoritesTitles;
    console.log(favesArr);
    if (favesArr.includes(unfavorableMovie.title)) {
      favesArr.splice(favesArr.indexOf(unfavorableMovie.title, 1));
      let params = {
        movie_name: unfavorableMovie.title
      };
      return Axios.delete("/movies/delete", { data: params.movie_name })
        .then(() => {
          console.log("successful deletion from client");
        })
        .catch(err => {
          console.log("unsuccessful deletion from client");
        });
    }
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>REALLY Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
            favorites={this.state.favorites}
            deleteMovie={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
