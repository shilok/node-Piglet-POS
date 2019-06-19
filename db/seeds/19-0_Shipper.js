
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('Shipper').del()
      .then(function () {
        // Inserts seed entries
        return knex('Shipper').insert(
          [
            {
                "name": "DHL",
                "phone": "1-800-225-5345",
                "website": "https://www.dhl.com/en.html",
                "trackingURL": "https://www.dhl.co.il/he/express/tracking.html?AWB="
              },
              {
                "name": "Fedex",
                "phone": "1-700-700-339",
                "website": "https://www.fedex.com",
                "trackingURL": "https://www.fedex.com/apps/fedextrack/?action=track&trackingnumber="
              },
              {
                "name": "UPS",
                "phone": "1-866-782-7892",
                "website": "https://www.ups.com",
                "trackingURL": "https://www.ups.com/track?loc=en_US&requester=ST/track#"
              }
          ]
        );
      });
  };
