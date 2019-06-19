var express = require('express')
var router = express.Router()

const knex = require('../../knex')

const createStore = (store) => {
    return knex('Store').insert(store)
}

const createInventory = (inventory) => {
    return knex('Inventory').insert(inventory)
}

const createInventoryLocation = (inventoryLocation) => {
    return knex('InventoryLocation').insert(inventoryLocation)
}




router.post('/createStore', (req, res) => {

    const store = req.body.store

    knex('Store').insert(store).then(() => {
        res.status(201).send("OK")
    }).catch(error => {
        res.send(error)
    })
})


module.exports = router