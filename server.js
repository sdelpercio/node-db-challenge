const express = require('express');
const morgan = require('morgan');
const projectsRouter = require('./projects/projects-router');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
	res.status(200).send('all good');
});

module.exports = server;
