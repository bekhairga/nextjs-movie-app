import React, { Component } from 'react';
import MovieCreateForm from '../../../components/movieCreateForm';
import { getMovieById } from '../../../actions/index';
export default class EditMovie extends Component {
	static async getInitialProps({ query }) {
		const movie = await getMovieById(query.id);
		return { movie };
	}
	render() {
		return (
			<div className='container'>
				<h1>Edit Movie</h1>
				<MovieCreateForm initialData={this.props.movie} />
			</div>
		);
	}
}
