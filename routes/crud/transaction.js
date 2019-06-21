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

router.post('/closeOrder', (req, res) => {
    const orderID = req.body.orderID
    let price = 0
    let taxes = 0

    knex.transaction(trx => {
        return trx('Order').where('id', orderID).andWhereNot('statusID', 2).update({ statusID: 2 }).then((result) => {
            if (result == 1) {
                res.status(202)
                return trx({ od: 'OrderDetails', o: 'Order' })
                    .select('od.price', 'od.discount', 'o.taxRate')
                    .where({ 'od.orderID': orderID, 'o.id': orderID })
                    .then(products => {
                        products.forEach(p => {
                            price += (p.price - p.discount)
                            taxes += ((p.price - p.discount) * p.taxRate)
                        })
                        const invoice = { orderID: orderID, taxes: taxes, totalPrice: price }
                        return trx('Invoice').insert(invoice)
                    })
            } else { res.status(204) }

        })

    }).then(result => {
        res.send("OK")
    }).catch(error => {
        res.status(400).send(error)
        console.log(error)
    })


})




module.exports = router