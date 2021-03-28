import React, { Component } from 'react';
import Router from 'next/router';
import MovieCreateForm from '../../../components/movieCreateForm';
import { getMovieById, updateMovie } from '../../../actions/index';
export default class EditMovie extends Component {
	static async getInitialProps({ query }) {
		const movie = await getMovieById(query.id);
		return { movie };
	}
	handleUpdateMovie = (movieToUpdate) => {
		updateMovie(movieToUpdate).then((updatedMovie) => {
			Router.push(`/movies/${updatedMovie.id}`);
		});
	};
	render() {
		return (
			<div className='container'>
				<h1>Edit Movie</h1>
				<MovieCreateForm
					handleMovie={this.handleUpdateMovie}
					initialData={this.props.movie}
				/>
			</div>
		);
	}
}
