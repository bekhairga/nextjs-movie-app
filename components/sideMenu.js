import Modal from './modal';
import MovieCreateForm from './movieCreateForm';
import { createMovie } from '../actions/index';
const SideMenu = ({ categories }) => {
	let modalRef = null;
	const handleCreateMovie = (movie) => {
		createMovie(movie).then((movies) => {
			console.log(JSON.stringify(movies));
			modalRef.closeModal();
		});
	};

	return (
		<>
			<Modal hasSubmit={false} ref={(el) => (modalRef = el)}>
				<MovieCreateForm handleCreateMovie={handleCreateMovie} />
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
