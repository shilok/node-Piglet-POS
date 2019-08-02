var express = require('express')
var router = express.Router()
const passport = require('passport')

const knex = require('../../knex')
const io = require('../../config/io')

const getOrderByID = (orderID) => knex('Order').first().where('id', orderID)
const addAddress = (address) => knex('Address').insert(address)


router.post('/getOrders', passport.authenticate('jwt', { session: false }), (req, res) => {

    let employeeID = req.user.id

    if (req.body.employeeID) {
        employeeID = req.body.employeeID
    }
 
    knex('Order').where({ employeeID, employeeID }).orderBy('modifiedDate', 'desc').then(result => {
        return res.json({ success: true, orders: result })
    }).catch(error => {
        return next(new Error(error));
    })
})

router.post('/getOrder', passport.authenticate('jwt', { session: false }), (req, res) => {

    let orderID = req.body.orderID
    if (!orderID) {
        return res.json({ success: false, msg: 'OrderID missing' })
    }
    getOrderByID(orderID).then(result => {
        if (!result) { return res.json({ success: false, msg: 'order not found' }) }
        return res.json({ success: true, order: result })
    }).catch(error => {
        return next(new Error(error));
    })

})

router.post('/addCustomerToOrder', passport.authenticate('jwt', { session: false }), (req, res) => {

    let orderID = req.body.orderID
    if (!orderID) {
        return res.json({ success: false, msg: 'OrderID missing' })
    }
    getOrderByID(orderID).then(result => {
        if (!result) { return res.json({ success: false, msg: 'order not found' }) }
        return res.json({ success: true, order: result })
    }).catch(error => {
        return next(new Error(error));
    })

})




module.exports = router