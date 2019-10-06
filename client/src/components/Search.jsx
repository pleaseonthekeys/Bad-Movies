import React from "react";
import Axios from "axios";
import GenreForm from "./GenreForm.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
    this.getGenres = this.getGenres.bind(this);
  }

  componentDidMount() {
    console.log("mounted");
    this.getGenres();
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    return Axios.get("/movies/genres")
      .then(({ data }) => {
        console.log("successfully queried API for genres");
        this.setState({ genres: data });
        console.log({ genres: this.state.genres });
      })
      .catch(err => {
        console.log("error querying API for genres", err);
      });
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? "Show Results" : "Show Favorites"}
        </button>
        <br />
        <br />
        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        <GenreForm
          genres={this.state.genres}
          getMovies={this.props.getMovies}
        />
        <br />
        <br />
      </div>
    );
  }
}

export default Search;
