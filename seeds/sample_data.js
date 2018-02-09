
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(`birthdays`).del()
    .then(function () {
      // Inserts seed entries
      return knex(`birthdays`).insert([
        {id: 1, full_name: 'Papa John', birthday: '1965-04-14'},
        {id: 2, full_name: 'Troy Maclure', birthday: '1954-04-17'},
        {id: 3, full_name: 'Jean Claude Van Damme', birthday: '1960-10-18'},
        {id: 4, full_name: 'John Stamos', birthday: '2018-02-08'},
        {id: 5, full_name: 'Sean Bon Jovie', birthday: '1958-02-10'},
        {id: 6, full_name: 'Fawn Bon Jovie', birthday: '1954-02-10'}
      ]);
    });
};


// In Production I just connected to my production database using the postgres
// command line tool (using the credentials generated for me by heroku).

// Then I just did some inserts using raw postgres statements eg:
// INSERT INTO birthdays VALUES ('Megaman', '1987-12-17');

// It would have been much nicer - and faster - to get all the birthday data from
// facebook, but unfourtunatley they discontiued that part of their api. (probably for the best)
