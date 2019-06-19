
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Location').del()
    .then(function () {
      // Inserts seed entries
      return knex('Location').insert(
        [{ "name": "Māmūnīyeh", "addressID": 178 },
        { "name": "Loum", "addressID": 478 },
        { "name": "Wonorejo", "addressID": 141 },
        { "name": "Évreux", "addressID": 337 },
        { "name": "Trollhättan", "addressID": 392 },
        { "name": "Bagrāmī", "addressID": 29 },
        { "name": "Vallentuna", "addressID": 342 },
        { "name": "Estevan", "addressID": 257 },
        { "name": "Hutag", "addressID": 350 },
        { "name": "Privolzhsk", "addressID": 195 },
        { "name": "Brampton", "addressID": 359 },
        { "name": "Hoàn Kiếm", "addressID": 214 },
        { "name": "Suqin Huimin", "addressID": 49 },
        { "name": "Querocotillo", "addressID": 168 },
        { "name": "Xianlin", "addressID": 44 },
        { "name": "Teupasenti", "addressID": 202 },
        { "name": "Krasnyy Yar", "addressID": 4 },
        { "name": "Plateliai", "addressID": 352 },
        { "name": "Pedregal", "addressID": 265 },
        { "name": "Pehuajó", "addressID": 197 },
        { "name": "Libu", "addressID": 400 },
        { "name": "Millerovo", "addressID": 364 },
        { "name": "Krasnokholmskiy", "addressID": 323 },
        { "name": "Takub", "addressID": 346 },
        { "name": "Mongu", "addressID": 166 },
        { "name": "Uddevalla", "addressID": 231 },
        { "name": "Cimanggu", "addressID": 463 },
        { "name": "Hamburg", "addressID": 22 },
        { "name": "Xin’an", "addressID": 112 },
        { "name": "Samanggen", "addressID": 484 }]);
    });
};
