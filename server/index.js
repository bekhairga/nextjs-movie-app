const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();
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
