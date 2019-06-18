var express = require('express')
var router = express.Router()

const knex = require('../../knex')

router.post('/createCustomer', (req, res) => {

    const email = { address: req.body.email }
    const phoneNumber = { number: req.body.phoneNumber }
    const address = req.body.address
    const customer = req.body.customer

    knex.transaction(trx => {
        return trx('Address').insert(address).then(addressID => {
            return trx('Email').insert(email).then(emailID => {
                customer.defaultAddressID = addressID
                return trx('Phone').insert(phoneNumber).then(phoneID => {
                    return trx('Customer').insert(customer).then(customerID => {
                        return trx('CustomerAddress').insert({ customerID: customerID, addressID: addressID }).then(() => {
                            return trx('CustomerEmail').insert({ customerID: customerID, emailID: emailID }).then((id) => {
                                return trx('CustomerPhone').insert({ customerID: customerID, phoneID: phoneID })
                            })
                        })
                    })
                })
            })
        })
    }).then(inserts => {
        console.log(`Results : ${inserts}`)
        res.send("OK")
    }).catch(error => {
        console.log(`Error : ${error}`)
        res.send(error)
    })







    // Using trx as a query builder:
    // createAddress(address)

    //   .then(addressID => {
    //       customer.defaultAddressID = addressID
    //     return knex('Customer').insert(customer)
    // createCustomer(customer).then(data => {
    //     console.log(`data is ${data}`)
    // })
    //   customer.defaultAddressID = emailID[0]
    //   customerEmail.emailID = emailID[0]

    //   createCustomer(customer)
    //     .then(customerID => {
    //         customerEmail.customerID = customerID[0]
    //         createCustomerEmail()
    //         res.send('OK')
    //     })
    // console.log(typeof(emailID) + ' new books saved. ' );
    //   })
    //   .catch(error => {
    //       res.send(error)
    //     // If we get here, that means that neither the 'Old Books' catalogues insert,
    //     // nor any of the books inserts will have taken place.
    //     console.error(error);
    // })

})


module.exports = router