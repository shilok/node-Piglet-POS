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

    const orderID = req.body.orderID
    const productID = req.body.productID
    const quantity = req.body.quantity
    const price = req.body.price
    const discount = req.body.discount
    const orderDetailsStatusID = req.body.orderDetailsStatusID

    let discountApproval = false

    const orderDetails = { orderID: orderID, productID: productID, quantity: quantity, price: price, discount: discount, orderDetailsStatusID: orderDetailsStatusID }

    knex.transaction(trx => {
        return trx('Product').first()
            .where('id', productID)
            .then((result) => {
                if (result.minPrice <= price / quantity) {
                    discountApproval = true
                    return trx('OrderDetails').insert(orderDetails).then(() => {
                        if (orderDetailsStatusID == 1) {
                            return trx('InventoryProduct').decrement('quantity', quantity)
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
            console.log(`result.quantity: ${result.quantity}`)
            console.log(`quantity: ${quantity}`)
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

    }).then(result => {
        res.send("OK")
    }).catch(error => {
        res.status(400).send(error)
        console.log(error)
    })


})




module.exports = router