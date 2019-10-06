import React, { Component } from "react";

class GenreForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGenreId: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("handling change in GenreForm component", {
      eventTarget: event.target.options
    });
    this.setState({
      currentGenreId: event.target.options[event.target.selectedIndex].value
    });
  }

  handleSubmit(event) {
    console.log("handling Submit in Genre Form");
    event.preventDefault();
    //searchByGenre where current state is the genreId
    this.props.getMovies(this.state.currentGenreId);
    console.log({ state: this.state });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.currentGenreId} onChange={this.handleChange}>
          {this.props.genres.map(genre => {
            return <option value={genre.id}>{genre.name}</option>;
          })}
        </select>
        <button type="submit" value="Submit">
          SEARCH
        </button>
      </form>
    );
  }
}

export default GenreForm;

{
  /* <select>
{props.genres.map(genre => (
  <GenreEntry genre={genre} />
))}
</select> */
}
