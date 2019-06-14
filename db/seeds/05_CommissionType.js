
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('CommissionType').del()
    .then(function () {
      // Inserts seed entries
      return knex('CommissionType').insert(
        [
          { "type": "Comm" },
          { "type": "Hourly" }
        ]
      );
    });
};
