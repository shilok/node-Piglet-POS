var express = require('express')
var router = express.Router()

const knex = require('../../knex')

router.post('/createStore', (req, res) => {

    const store = req.body.store

    knex('Store').insert(store).then(() => {
        res.status(201).send("OK")
    }).catch(error => {
        res.send(error)
    })
})


module.exports = router