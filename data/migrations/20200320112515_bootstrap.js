exports.up = function(knex) {
	return knex.schema
		.createTable('projects', tbl => {
			tbl.increments();
			tbl.string('name', 255).notNullable();
			tbl.text('description');
			tbl
				.boolean('completed')
				.notNullable()
				.defaultTo(false);
		})
		.createTable('tasks', tbl => {
			tbl.increments();
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects');
			tbl.text('description').notNullable();
			tbl.text('notes');
			tbl
				.boolean('completed')
				.notNullable()
				.defaultTo(false);
		})
		.createTable('resources', tbl => {
			tbl.increments();
			tbl
				.string('name')
				.unique()
				.notNullable();
			tbl.text('description');
		})
		.createTable('project-resources', tbl => {
			tbl.primary(['project_id', 'resource_id']);
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl
				.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('resources')
				.onUpdate('RESTRICT')
				.onDelete('CASCADE');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('project-resources')
		.dropTableIfExists('resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('projects');
};
