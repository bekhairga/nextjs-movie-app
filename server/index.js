const next = require('next');
const express = require('express');

const fs = require('fs');
const path = require('path');
const filePath = './data.json';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const moviesData = require(filePath);

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
		moviesData.push(movie);

		const pathToFile = path.join(__dirname, filePath);
		const stringifiedData = JSON.stringify(moviesData, null, 2);
		fs.writeFile(pathToFile, stringifiedData, (err) => {
			if (err) {
				console.log(err);
				return res.status(422).send(err);
			}
			return res.json('movie has been created');
		});
	});

	server.patch('/api/v1/movies/:id', (req, res) => {
		const id = req.params.id;
		const movie = req.body;
		console.log(movie);
		const movieIdx = moviesData.findIndex((el) => el.id === id);
		moviesData[movieIdx] = movie;
		const pathToFile = path.join(__dirname, filePath);
		const stringifiedData = JSON.stringify(moviesData, null, 2);
		fs.writeFile(pathToFile, stringifiedData, (err) => {
			if (err) {
				console.log(err);
				return res.status(422).send(err);
			}
			return res.json(movie);
		});
	});
	server.delete('/api/v1/movies/:id', (req, res) => {
		const id = req.params.id;

		const movieIdx = moviesData.findIndex((el) => el.id === id);
		moviesData.splice(movieIdx, 1);

		const pathToFile = path.join(__dirname, filePath);
		const stringifiedData = JSON.stringify(moviesData, null, 2);
		fs.writeFile(pathToFile, stringifiedData, (err) => {
			if (err) {
				console.log(err);
				return res.status(422).send(err);
			}
			return res.json(moviesData);
		});
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
