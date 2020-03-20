const db = require('../data/db-config');

module.exports = {
	getTasks,
	addTask
};

function getTasks() {
	return db('tasks as t')
		.join('projects as p', 't.project_id', '=', 'p.id')
		.select(
			't.*',
			'p.name as ProjectName',
			'p.description as ProjectDescription'
		);
}
function addTask(newTask) {
	return db('tasks').insert(newTask, 'id');
}
