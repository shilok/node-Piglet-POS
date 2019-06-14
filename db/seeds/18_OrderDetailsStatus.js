
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('OrderDetailsStatus').del()
    .then(function () {
      // Inserts seed entries
      return knex('OrderDetailsStatus').insert(
        [{ "status": "Comm" },
        { "status": "Hourly" }
        ]
      );
    });
};
