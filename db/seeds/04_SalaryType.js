
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('SalaryType').del()
    .then(function () {
      // Inserts seed entries
      return knex('SalaryType').insert(
        [
          { "type": "Comm" },
          { "type": "Hourly" }
        ]
      );
    });
};
