import React from "react";

class MovieList extends React.Component {
  shortenMovieDescription = (description) => {
    if (description && description.length >= 100) {
      return description.substr(0, 100) + " ...";
    }
    return description;
  };
  render() {
    const { movies } = this.props;
    return (
      <>
        {movies.map((movie) => (
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a href="#">
                <img
                  className="card-img-top"
                  src={movie.image}
                  alt={movie.name}
                />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{movie.name}</a>
                </h4>
                <p className="card-text">
                  {this.shortenMovieDescription(movie.description)}
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{movie.rating}</small>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default MovieList;
