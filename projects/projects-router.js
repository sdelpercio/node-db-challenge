const express = require('express');
const Project = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
	Project.getProjects()
		.then(projects => {
			res.status(200).json(projects);
		})
		.catch(err => {
			res.status(500).json({ error: 'Issue finding projects.', err });
		});
});
router.get('/:id', (req, res) => {
	const { id } = req.params;

	Project.getAProject(id)
		.then(project => {
			Project.getProjectTasks(id).then(tasks => {
				res.status(200).json({ project, tasks: tasks });
			});
		})
		.catch(err => {
			res.status(500).json({ error: 'Issue finding project.', err });
		});
});
router.post('/', (req, res) => {
	const newProject = req.body;

	Project.addProject(newProject)
		.then(id => {
			res.status(201).json(id);
		})
		.catch(err => {
			res.status(500).json({ error: 'Issue creating new project.', err });
		});
});

module.exports = router;
