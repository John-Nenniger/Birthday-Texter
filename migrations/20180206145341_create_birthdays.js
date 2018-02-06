
exports.up = function(knex, Promise) {
  knex.schema.createTable('birthdays', (table)=>{
    table.increments();
    table.string('full_name');
    table.date('birthday')
    table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('birthdays')
};
