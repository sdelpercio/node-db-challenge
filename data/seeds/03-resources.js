exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('resources')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('resources').insert([
				{
					name: 'Software Developers',
					description: 'A group of Software devs'
				},
				{
					name: 'Custom IDE',
					description: 'Integrated Development Environment'
				},
				{
					name: 'Researchers',
					description: 'A group of researchers to plan apps'
				}
			]);
		});
};
