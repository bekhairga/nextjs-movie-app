const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const moviesData = require('./data.json');

app.prepare().then(() => {
	const server = express();
	server.use(express.json());

	//api endpoints

	server.get('/api/v1/movies', (req, res) => {
		return res.json(moviesData);
	});

	server.get('/api/v1/movies/:id', (req, res) => {
		const { id } = req.params;
		const movie = moviesData.find((el) => el.id === id);
		return res.json(movie);
	});
	server.post('/api/v1/movies', (req, res) => {
		const movie = req.body;
		return res.json({ movie });
	});

	server.patch('/api/v1/movies/:id', (req, res) => {
		const id = req.params.id;
		return res.json({ message: `updating movie with id ${id}` });
	});

	server.delete('/api/v1/movies/:id', (req, res) => {
		const id = req.params.id;
		return res.json({ message: `deleting movie with id ${id}` });
	});

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	const PORT = process.env.PORT || 3000;
	server.use(handle).listen(PORT, (error) => {
		if (error) {
			throw error;
		}
		console.log('ready on port ' + PORT);
	});
});
