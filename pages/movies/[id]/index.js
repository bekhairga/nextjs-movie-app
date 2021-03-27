import { useRouter } from 'next/router';
import { getMovieById, deleteMovie } from '../../../actions';
const Movie = ({ movie }) => {
	const router = useRouter();
	const { id } = router.query;
	const handleDelete = (id) => {
		deleteMovie(id).then(() => {
			router.push('/');
		});
	};
	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-4'>{movie.name}</h1>
				<p className='lead'>{movie.description}</p>
				<hr className='my-4' />
				<p>{movie.genre}</p>
				<button className='btn btn-primary btn-lg mr-1' href='#' role='button'>
					Learn more
				</button>
				<button
					onClick={() => handleDelete(id)}
					className='btn btn-danger btn-lg'
					role='button'
				>
					Delete
				</button>
			</div>
			<p className='m-2'>{movie.longDescription}</p>
		</div>
	);
};
Movie.getInitialProps = async (context) => {
	const { id } = context.query;
	const movie = await getMovieById(id);
	return {
		movie,
	};
};
export default Movie;
