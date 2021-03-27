import axios from 'axios';
const BASE_URL = 'http://localhost:3000';
const CATEGORY_DATA = [
	{
		id: 1,
		name: 'drama',
	},
	{
		id: 2,
		name: 'action',
	},
	{
		id: 3,
		name: 'adventure',
	},
	{
		id: 4,
		name: 'historical',
	},
	{
		id: 5,
		name: 'romantic',
	},
];
export const getCategories = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(CATEGORY_DATA);
		}, 500);
	});
};
export const getMovies = () => {
	// return new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		resolve(MOVIE_DATA);
	// 	}, 500);
	// });
	return axios.get(`${BASE_URL}/api/v1/movies`).then((res) => {
		return res.data;
	});
};
export const createMovie = (movie) => {
	movie.id = Math.random().toString(36).substr(2, 7);
	return axios.post(`${BASE_URL}/api/v1/movies`, movie).then((res) => res.data);
};

export const deleteMovie = (id) => {
	return axios
		.delete(`${BASE_URL}/api/v1/movies/${id}`)
		.then((res) => res.data);
};
export const getMovieById = (id) => {
	return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then((res) => res.data);
};
export const getPosts = () => {
	return axios.get(`${BASE_URL}/api/v1/posts`).then((res) => res.data);
};
