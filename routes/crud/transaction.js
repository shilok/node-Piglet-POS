var express = require('express')
var router = express.Router()

const knex = require('../../knex')

router.post('/createOrder', (req, res) => {
    const order = req.body.order

    knex('Order').insert(order).then(orderID => {
        res.status(201).send(orderID)
    }).catch(error => {
        res.status(400).send(error)
    })
})

router.post('/addProductToOrder', (req, res) => {

    const quantity = req.body.quantity
    const inventoryID = req.body.inventoryID
    const productID = req.body.productID

    let productAvailable = false

    knex.transaction(trx => {
        return trx('InventoryProduct').first('quantity')
            .where({ inventoryID: inventoryID, productID: productID }).then((result) => {
                if (result.quantity >= quantity) {
                    productAvailable = true
                    return trx('InventoryProduct').decrement('quantity', quantity)
                }
            })
    }).then(() => {
        if (productAvailable) {
            res.status(201).send('Success')
        } else {
            res.status(202).send('Missing in Inventory')
        }
    }).catch(error => {
        res.status(400).send(error)
    })
})


module.exports = router