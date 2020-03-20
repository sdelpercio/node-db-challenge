const db = require('../data/db-config');

module.exports = {
	getProjects,
	getAProject,
	getProjectTasks,
	addProject
};

function getProjects() {
	return db('projects');
}
function getAProject(id) {
	return db('projects')
		.where({ id })
		.first();
}
function getProjectTasks(id) {
	return db('tasks').where({ project_id: id });
}
function addProject(newProject) {
	return db('projects').insert(newProject, 'id');
}
