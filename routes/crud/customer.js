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

    // Using trx as a query builder:
knex.transaction(function(trx) {

  
    return trx
      .insert({address: 'test4433'})
      .into('Email')
      .then(function(ids) {
        return trx('CustomerEmail').insert({customerID: 1050, emailID: ids});
        });
      });
  })
  .then(function(inserts) {
      res.send('OK')
    console.log(inserts.length + ' new books saved.');
  })
  .catch(function(error) {
      res.send(error)
    // If we get here, that means that neither the 'Old Books' catalogues insert,
    // nor any of the books inserts will have taken place.
    console.error(error);
})


module.exports = router