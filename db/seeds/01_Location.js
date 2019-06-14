
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Location').del()
    .then(function () {
      // Inserts seed entries
      return knex('Location').insert(
        [{ "name": "Mora" },
        { "name": "Plandirejo" },
        { "name": "Sale" },
        { "name": "Murcia" },
        { "name": "Kuala Lumpur" },
        { "name": "Khorramābād" },
        { "name": "Laifang" },
        { "name": "Taoxi" },
        { "name": "Roche Terre" },
        { "name": "Jieheshi" },
        { "name": "Fuchun" },
        { "name": "Jixing" },
        { "name": "Panganiban" },
        { "name": "Nagrog" },
        { "name": "Marisol" },
        { "name": "Sebasang" },
        { "name": "Sabaneta" },
        { "name": "Santa Rosa del Sara" },
        { "name": "Żarki" },
        { "name": "Skotoússa" },
        { "name": "Cigintung" },
        { "name": "New York City" },
        { "name": "Depok" },
        { "name": "Älvsbyn" },
        { "name": "Zhijiang" },
        { "name": "Kuala Lumpur" },
        { "name": "Loikaw" },
        { "name": "Sukarama" },
        { "name": "Izra‘" },
        { "name": "Emnambithi-Ladysmith" }]
      );
    });
};
