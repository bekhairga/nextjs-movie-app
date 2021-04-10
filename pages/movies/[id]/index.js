import { useRouter } from 'next/router';
import { getMovieById, deleteMovie } from '../../../actions';
import Link from 'next/link';
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
					className='btn btn-danger btn-lg mr-1'
					role='button'
				>
					Delete
				</button>
				<Link href={`/movies/${id}/edit`} as={`/movies/${id}/edit`}>
					<button
						onClick={() => router.push(`/movies/${movie.id}/edit`)}
						className='btn btn-warning btn-lg'
						role='button'
					>
						Edit
					</button>
				</Link>
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
