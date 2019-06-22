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

    const orderDetails = {
        orderID: req.body.orderID,
        productID: req.body.productID,
        inventoryID: req.body.inventoryID,
        quantity: req.body.quantity,
        price: req.body.price,
        discount: req.body.discount,
        orderDetailsStatusID: req.body.orderDetailsStatusID
    }


    let discountApproval = false


    knex.transaction(trx => {
        return trx('Product').first()
            .where('id', orderDetails.productID)
            .then((result) => {
                if (result.minPrice <= orderDetails.price / orderDetails.quantity) {
                    discountApproval = true
                    return trx('OrderDetails').insert(orderDetails).then(() => {
                        if (orderDetails.orderDetailsStatusID == 1) {
                            return trx('InventoryProduct').decrement('quantity', orderDetails.quantity)
                        }
                    })
                }
            })
    }).then(() => {
        if (discountApproval) {
            res.status(201).send('Success')
        } else {
            res.status(203).send('Price not approved')
        }
    }).catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
})

router.post('/checkAvailability', (req, res) => {
    const inventoryID = req.body.inventoryID
    const productID = req.body.productID
    const quantity = req.body.quantity

    knex('InventoryProduct').first()
        .where({ 'inventoryID': inventoryID, 'productID': productID })
        .then(result => {
            if (quantity > result.quantity) {
                res.status(202).send('Missing in stock')
            } else {
                res.status(202).send('In Stock')
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

    }).then(() => {
        res.send("OK")
    }).catch(error => {
        res.status(400).send(error)
        console.log(error)
    })


})

router.post('/cancelOrder', (req, res) => {
    const orderID = req.body.orderID

    knex({od: 'OrderDetails'})
        .where(build => {
            build.where('od.orderID', orderID).andWhere('od.orderDetailsStatusID', 1)
        })
        .join({ip: 'InventoryProduct'}, function () {
            this.on('ip.productID', 'od.productID').andOn('ip.inventoryID', 'od.inventoryID')
        })
        .update({'ip.quantity': knex.raw('?? + ??', ['ip.quantity', 'od.quantity'])})
    .then(result => {
        res.sendStatus(202)
    }).catch(err => {res.send(err)})
})




module.exports = router