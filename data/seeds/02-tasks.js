exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('tasks').insert([
				{
					project_id: '1',
					description: 'Create react app',
					notes: '',
					completed: 'true'
				},
				{
					project_id: '1',
					description: 'Make components',
					notes: 'some notes',
					completed: 'true'
				},
				{
					project_id: '2',
					description: 'Research music apps',
					notes: 'google',
					completed: 'false'
				},
				{
					project_id: '3',
					description: 'Study yelps app',
					notes: 'they know what theyre doing',
					completed: 'false'
				},
				{
					project_id: '3',
					description: 'create a clone of yelp',
					notes: 'shouldnt be that hard',
					completed: 'false'
				}
			]);
		});
};
