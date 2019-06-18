var express = require('express')
var router = express.Router()

const knex = require('../../knex')

router.post('/createEmployee', (req, res) => {

    const employee = req.body.employee

    knex('Employee').insert(employee).then(() => {
        res.status(201).send("OK")
    }).catch(error => {
        res.send(error)
    })
})


module.exports = router