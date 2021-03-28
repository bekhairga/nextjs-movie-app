import { useRouter } from 'next/router';
import Modal from './modal';
import MovieCreateForm from './movieCreateForm';
import { createMovie } from '../actions/index';
const SideMenu = ({ categories }) => {
	let modalRef = null;
	const router = useRouter();
	const handleCreateMovie = (movie) => {
		createMovie(movie).then((movies) => {
			modalRef.closeModal();
			router.push('/');
		});
	};

	return (
		<>
			<Modal hasSubmit={false} ref={(el) => (modalRef = el)}>
				<MovieCreateForm handleMovie={handleCreateMovie} />
			</Modal>
			<h1 className='my-4'>Shop Name</h1>
			<div className='list-group'>
				{categories.map((category) => (
					<a href='#' key={category.id} className='list-group-item'>
						{category.name}
					</a>
				))}
			</div>
		</>
	);
};

export default SideMenu;
