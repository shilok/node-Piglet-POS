
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ShiftStatus').del()
    .then(function () {
      // Inserts seed entries
      return knex('ShiftStatus').insert([
        {
          "status": "Comm"
        },
        {
          "status": "Hourly"
        },
        {
          "status": "Hourly2"
        }
      ]);
    });
};
