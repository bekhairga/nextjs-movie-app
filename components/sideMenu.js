const SideMenu = ({ categories }) => {
	return (
		<>
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
