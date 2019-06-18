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
                            return trx('CustomerEmail').insert({ customerID: customerID, emailID: emailID }).then(() => {
                                return trx('CustomerPhone').insert({ customerID: customerID, phoneID: phoneID })
                            })
                        })
                    })
                })
            })
        })
    }).then(() => {
        res.status(201).send("OK")
    }).catch(error => {
        res.status(400).send(error)
    })
})


module.exports = router