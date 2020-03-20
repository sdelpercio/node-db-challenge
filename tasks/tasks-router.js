const express = require('express');
const Task = require('./tasks-model');

const router = express.Router();

router.get('/', (req, res) => {
	Task.getTasks()
		.then(tasks => {
			res.status(200).json(tasks);
		})
		.catch(err => {
			res.status(500).json({ error: 'Issue finding tasks.', err });
		});
});
router.post('/', (req, res) => {
	const newTask = req.body;

	Task.addTask(newTask)
		.then(id => {
			res.status(201).json(id);
		})
		.catch(err => {
			res.status(500).json({ error: 'Issue creating new task.', err });
		});
});

module.exports = router;
