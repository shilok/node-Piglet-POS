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
        res.json({'success': true})
    }).catch(error => {
        res.json({'success': false})
    })
})

router.post('/addEmail', (req, res) => {
    const customerID = req.body.customerID
    const email = { email: req.body.email }

    knex.transaction(trx => {
        return trx('Email').insert(email).then(emailID => {
            return trx('CustomerEmail').insert({ customerID: customerID, emailID: emailID })
        })
    })
        .then(data => { res.sendStatus(202) })
        .catch(err => { res.sendStatus(400) })
})

 
router.get('getCustomer', (req, res) => {
    knex({cust: 'Customer'})
    .join({addr: 'Address'}, 'addr.id', 'cust.defaultAddressID')
    .join({cp: 'CustomerPhone'}, 'cp.customerID', 'cust.id')
    .join({p: 'Phone'}, 'p.id', 'cp.phoneID')
    .select({id: 'cust.id', firstName: 'cust.firstName', lastName: 'cust.lastName',
                country: 'addr.country', state: 'addr.state', city: 'addr.city',
                line1: 'addr.line1', line2: 'addr.line2',
              phones: knex.raw('GROUP_CONCAT(p.number)')
            })
    .where('cust.id', 2)
    .then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router