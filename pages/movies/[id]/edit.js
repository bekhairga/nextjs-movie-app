import React, { Component } from 'react';
import MovieCreateForm from '../../../components/movieCreateForm';
import { getMovieById } from '../../../actions/';
export default class EditMovie extends Component {
	static getInitialProps({ query }) {
		return { query };
	}
	constructor(props) {
		super(props);
		this.state = {
			movies: {
				name: '',
				description: '',
				rating: '',
				image: '',
				cover: '',
				longDescription: '',
				genre: '',
			},
		};
	}

	componentDidMount() {
		const { id } = this.props.query;
		getMovieById(id).then((movie) => {
			this.setState({ movie: movie });
		});
	}
	render() {
		const { movie } = this.state;
		return (
			<div className='container'>
				<h1>Edit Movie</h1>
				<MovieCreateForm initialData={movie} />
			</div>
		);
	}
}
