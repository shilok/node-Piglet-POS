
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('OrderStatus').del()
    .then(function () {
      // Inserts seed entries
      return knex('OrderStatus').insert(
        [
          {
            "status": "Progress"
          },
          {
            "status": "OLD"
          },
          {
            "status": "OLD"
          },
          {
            "status": "OLD"
          }
        ]
      );
    });
};
