
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(`birthdays`).del()
    .then(function () {
      // Inserts seed entries
      return knex(`birthdays`).insert([
        {id: 1, full_name: 'Papa John', birthday: '1965-04-14'},
        {id: 2, full_name: 'Troy Maclure', birthday: '1954-04-17'},
        {id: 3, full_name: 'Jean Claude Van Damme', birthday: '1960-10-18'}
      ]);
    });
};
