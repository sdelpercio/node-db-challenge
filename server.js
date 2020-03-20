const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.get('/', (req, res) => {
	res.status(200).send('all good');
});

module.exports = server;
