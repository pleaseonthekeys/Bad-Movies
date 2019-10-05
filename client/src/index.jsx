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
      showFaves: false
    };

    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
    // this.saveMovies = this.saveMovies.bind(this);
    // this.deleteMovies = this.deleteMovies.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  getMovies(genreId) {
    //comes from options value
    // make an axios request to your server on the GET SEARCH endpoint
    Axios.get("/movies/search", genreId) //this is not correct yet
      .then(({ data }) => {
        console.log("successful search from client", { data });
        this.setState({ movies: data });
      })
      .catch(err => {
        console.log("unsucessfuly search from client", err);
      });
  }

  saveMovie(favoriteMovie) {
    // same as above but do something diff
    Axios.post("/movies/save", favoriteMovie)
      .then(() => {
        console.log("successful post to favorites from client");
      })
      .catch(err => {
        console.log("unsuccesful post from client");
      });
  }

  deleteMovie(unfavorableMovie) {
    // same as above but do something diff
    Axios.delete("/movies/delete", { data: unfavorableMovie })
      .then(() => {
        console.log("successful deletion from client");
      })
      .catch(err => {
        console.log("unsuccessful deletion from client");
      });
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
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
