var express = require('express')
var router = express.Router()

const knex = require('../../knex')




const createCustomerEmail = (trx, email) => {
    return trx.insert({address: email}).into('Email')
}

router.post('/email', (req, res) => {
    let emailID = 0
    let phoneID = 0
    let customerID = 0

    knex.transaction((trx) => {
        createCustomerEmail(trx, "test123@test.com")
          .then((ids) => {
            console.log(`ids - : ${ids}`)
            });
          })
      .then((inserts) => {
        console.log(inserts.length + ' new books saved.');
      })
      .catch((error) => {
          res.send(error)
        console.error(`Error - : ${error}`);
      });
})


module.exports = router