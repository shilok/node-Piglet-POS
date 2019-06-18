var express = require('express')
var router = express.Router()

const knex = require('../../knex')




const createEmail = (trx, email) => {
    return trx.insert({address: email}).into('Email')
}

const createCustomerEmail = (trx, customerID, emailID) => {
    return trx.insert({customerID: customerID, emailID: emailID}).into('CustomerEmail')
}

const createCustomerPhone = (trx, phone) => {
    return trx.insert({number: phone}).into('Phone')
}

router.post('/email', (req, res) => {
    let emailID = 0
    let phoneID = 0
    let customerID = 0

    knex.transaction((trx) => {
        createEmail(trx, "test123@test.com")
          .then((emailID) => {
            createCustomerEmail(trx, 2222, emailID)
            });
          })
      .then((inserts) => {
        console.log(inserts +  ' new books saved.');
      })
      .catch((error) => {
          res.send(error)
        console.error(`Error - : ${error}`);
      });
})


module.exports = router