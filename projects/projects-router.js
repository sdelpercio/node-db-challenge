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
