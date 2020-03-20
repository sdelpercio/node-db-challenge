exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('projects')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('projects').insert([
				{
					name: 'To do app',
					description: 'A simple to do app',
					completed: 'true'
				},
				{
					name: 'Music app',
					description: 'Music app to find your favorite music',
					completed: 'false'
				},
				{
					name: 'Food app',
					description: 'Food app to find popular restaurants near you',
					completed: 'false'
				}
			]);
		});
};
