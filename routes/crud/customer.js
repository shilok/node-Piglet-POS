var express = require('express')
var router = express.Router()

const knex = require('../../knex')




function createCustomer(){

    knex.transaction((trx) => {
        return trx
          .insert({address: 'test@test'})
          .into('Email')
          .then((ids) => {
            console.log(`ids - : ${ids}`)
            });
          })
      .then((inserts) => {
        console.log(inserts.length + ' new books saved.');
      })
      .catch((error) => {
        console.error(`Error - : ${error}`);
      });

    
}

router.post('/email', (req, res) => {
    knex.transaction((trx) => {
        return trx
          .insert({address: 'test@test'})
          .into('Email')
          .then((ids) => {
            console.log(`ids - : ${ids}`)
            });
          })
      .then((inserts) => {
          res.send(`ids is - : ${ids}`)
        console.log(inserts.length + ' new books saved.');
      })
      .catch((error) => {
          res.send(error)
        console.error(`Error - : ${error}`);
      });
})


module.exports = router