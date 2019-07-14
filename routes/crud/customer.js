var express = require('express')
var router = express.Router()
const passport = require('passport')

const knex = require('../../knex')

const validateEmail = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
}

const getCustomerByID = (customerID) => knex({ c: 'Customer' })
    .where('c.id', customerID);

const getEmailsByCustomerID = (customerID) => getCustomerByID(customerID)
    .leftJoin({ ce: 'CustomerEmail' }, 'c.id', 'ce.customerID')
    .leftJoin({ e: 'Email' }, 'ce.emailID', 'e.id')
    .select({ cID: 'c.id', emails: knex.raw('JSON_ARRAYAGG(e.address)') })
    .groupBy('ce.customerID')

const getAddressesByCustomerID = (customerID) => getCustomerByID(customerID)
    .leftJoin({ ca: 'CustomerAddress' }, 'c.id', 'ca.customerID')
    .leftJoin({ e: 'Address' }, 'ca.addressID', 'e.id')
    .select({
        cID: 'c.id',
        addressID: knex.raw('JSON_ARRAYAGG(e.id)'),
        country: knex.raw('JSON_ARRAYAGG(e.country)'),
        state: knex.raw('JSON_ARRAYAGG(e.state)'),
        city: knex.raw('JSON_ARRAYAGG(e.city)'),
        line1: knex.raw('JSON_ARRAYAGG(e.line1)'),
        line2: knex.raw('JSON_ARRAYAGG(e.line2)')
    })
    .groupBy('c.id')

const getCustomer = (customerID) => getCustomerByID(customerID)
    .join({ ca: getAddressesByCustomerID(customerID) }, 'ca.cID', 'c.id')
    .join({ ce: getEmailsByCustomerID(customerID) }, 'ce.cID', 'c.id')
    .leftJoin({ cp: 'CustomerPhone' }, 'c.id', 'cp.customerID')
    .leftJoin({ p: 'Phone' }, 'cp.phoneID', 'p.id')
    .select('c.*', 'ca.*', { emails: 'ce.emails', phones: knex.raw('JSON_ARRAYAGG(p.number)') })
    .groupBy('c.id')

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
        res.json({ 'success': true })
    }).catch(error => {
        res.json({ 'success': false })
    })
})

router.post('/addCustomerEmail', (req, res) => {
    if (!req.body.customerID) { return res.json({ success: false, msg: 'CustomerID is missing' }) }
    if (!req.body.email) { return res.json({ success: false, msg: 'Email Address is missing' }) }

    const customerID = req.body.customerID
    const email = { address: req.body.email }

    if (!validateEmail(email.email)) {
        return res.json({ success: false, msg: 'Email Address not validated' })
    }

    knex.transaction(trx => {
        return trx('Email').insert(email).then(emailID => {
            return trx('CustomerEmail').insert({ customerID: customerID, emailID: emailID })
        })
    })
        .then(data => { return res.json({ success: true }) })
        .catch(err => { return res.json({ success: false }) })

})


router.post('/getCustomer', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (!req.body.customerID) {
        return res.json({ success: false, msg: 'CustomerID required' })
    }
    getCustomer(req.body.customerID).first().then(customer => {

        let emails = JSON.parse(customer.emails)
        let phones = JSON.parse(customer.phones)
        let addressID = JSON.parse(customer.addressID)
        let country = JSON.parse(customer.country)
        let state = JSON.parse(customer.state)
        let city = JSON.parse(customer.city)
        let line1 = JSON.parse(customer.line1)
        let line2 = JSON.parse(customer.line2)

        customer.addresses = []
        for (const key in addressID) {
            const address = {
                id: addressID[key],
                country: country[key],
                state: state[key],
                city: city[key],
                line1: line1[key],
                line2: line2[key]
            }
            if (!address.line2) {delete address.line2}
            customer.addresses.push(address)
        }
        if (!customer.addresses[0].id){
            delete customer.addresses
        }
        delete customer.addressID
        delete customer.country
        delete customer.state
        delete customer.city
        delete customer.line1
        delete customer.line2


        if (!emails[0]) { delete customer.emails }
        else { customer.emails = JSON.parse(customer.emails) }
        if (!phones[0]) { delete customer.phones }
        else { customer.phones = JSON.parse(customer.phones) }

        return res.json({ success: true, customer: customer })

    }).catch(err => {
        return res.json({ success: false, msg: err })
    })



})

module.exports = router