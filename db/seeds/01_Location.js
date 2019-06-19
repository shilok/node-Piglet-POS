
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Location').del()
    .then(function () {
      // Inserts seed entries
      return knex('Location').insert(
        [{ "name": "China", "addressID": 165 },
        { "name": "Bulgaria", "addressID": 102 },
        { "name": "Russia", "addressID": 455 },
        { "name": "Kenya", "addressID": 300 },
        { "name": "Japan", "addressID": 218 },
        { "name": "Morocco", "addressID": 411 },
        { "name": "Norway", "addressID": 95 },
        { "name": "France", "addressID": 305 },
        { "name": "France", "addressID": 414 },
        { "name": "Poland", "addressID": 291 },
        { "name": "Canada", "addressID": 388 },
        { "name": "Afghanistan", "addressID": 193 },
        { "name": "Indonesia", "addressID": 305 },
        { "name": "Philippines", "addressID": 334 },
        { "name": "Brazil", "addressID": 181 },
        { "name": "Palestinian Territory", "addressID": 184 },
        { "name": "Portugal", "addressID": 51 },
        { "name": "Indonesia", "addressID": 211 },
        { "name": "Czech Republic", "addressID": 173 },
        { "name": "China", "addressID": 200 },
        { "name": "Russia", "addressID": 196 },
        { "name": "Indonesia", "addressID": 493 },
        { "name": "Indonesia", "addressID": 407 },
        { "name": "Malaysia", "addressID": 103 },
        { "name": "Indonesia", "addressID": 383 },
        { "name": "China", "addressID": 25 },
        { "name": "Greece", "addressID": 314 },
        { "name": "Philippines", "addressID": 80 },
        { "name": "Slovenia", "addressID": 74 },
        { "name": "Portugal", "addressID": 414 }]);
    });
};
