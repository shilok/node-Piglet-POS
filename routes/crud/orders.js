var express = require('express')
var router = express.Router()
const passport = require('passport')

const knex = require('../../knex')
const io = require('../../config/io')

router.post('/getOrders', passport.authenticate('jwt', { session: false }), (req, res) => {
    
    let employeeID = req.user.id

    if (req.body.employeeID){
        employeeID = req.body.employeeID
    }

    knex('Order').where({employeeID, employeeID}).orderBy('modifiedDate', 'desc').then(result => {
        res.json({success: true, orders: result})
    }).catch(error => {
        res.json({success: false})
    })
})
 

module.exports = router