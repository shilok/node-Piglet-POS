
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('OrderStatus').del()
    .then(function () {
      // Inserts seed entries
      return knex('OrderStatus').insert(
        [
          {
            "name": "Progress"
          },
          {
            "name": "OLD"
          },
          {
            "name": "OLD"
          },
          {
            "name": "OLD"
          }
        ]
      );
    });
};
