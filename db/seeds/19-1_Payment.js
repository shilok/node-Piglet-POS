
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('Payment').del()
        .then(function () {
            // Inserts seed entries
            return knex('Payment').insert(
                [
                    { "type": "MasterCard" },
                    { "type": "American Express" },
                    { "type": "Cash" }
                ]
            );
        });
};
