var express = require('express')
var router = express.Router()
const passport = require('passport')

const knex = require('../../knex')
const io = require('../../config/io')

router.post('/createOrder', passport.authenticate('jwt', { session: false }), (req, res) => {
    let order = {}
    if (req.body.order){
         order = req.body.order
    }
    order.employeeID = req.user.id

    knex('Order').insert(order).then(orderID => {
        knex('Order').where('id', orderID).first().then(data => {
            return res.json({success: true, order: data})
        })
    }).catch(error => {
        return res.json({success: false})
    })
})

function productAvailable(productQuantity, result) {
    if (result.quantity > productQuantity) {
        return true
    }
    return false
}

router.post('/addProductToOrder', (req, res) => {

    const orderDetails = {
        orderID: req.body.orderID,
        productID: req.body.productID,
        inventoryID: req.body.inventoryID,
        quantity: req.body.quantity,
        price: req.body.price,
        discount: req.body.discount,
        statusID: req.body.statusID
    }


    let discountApproval = false
    let productAvail = false
    let productExist = false

    knex.transaction(trx => {
        return trx('Product').first()
            .where('id', orderDetails.productID)
            .join({ ip: 'InventoryProduct' }, function () {
                this.on('ip.productID', orderDetails.productID).andOn('ip.inventoryID', orderDetails.inventoryID)
            })
            .then((result) => {
                if (result) {
                    productExist = true
                    if (productAvailable(orderDetails.quantity, result)) {
                        productAvail = true
                    }
                    if (result.minPrice <= orderDetails.price / orderDetails.quantity) {
                        discountApproval = true
                        return trx('OrderDetails').insert(orderDetails).then(() => {
                            if (orderDetails.statusID == 1) {
                                return trx('InventoryProduct').decrement('quantity', orderDetails.quantity)
                                    .where(inv => {
                                        inv.where('productID', orderDetails.productID)
                                            .andWhere('inventoryID', orderDetails.inventoryID)
                                    }).then(()=>{
                                        return trx('InventoryProduct').first().where(inv => {
                                            inv.where('productID', orderDetails.productID)
                                                .andWhere('inventoryID', orderDetails.inventoryID)
                                        }).then(product => {
                                            io.sockets.emit('quantity_updated', product)
                                        })
                                    })
                            }
                        })
                    }
                }
            })
    }).then(() => {
        if (!productExist) {
            console.log("Product does not exist")
            return res.json({ success: false, status: "Product does not exist" })
        }
        if (!productAvail) {
            console.log('Product not available')
            return res.json({ success: false, status: "Product not available" })
        }
        if (!discountApproval) {
            console.log('Price not approved')
            return res.json({ success: false, status: "Price not approved" })
        }
        console.log(`Success`)
        return res.json({ success: true})

    }).catch(error => {
        console.log(error)
        return res.json({success: false, error: error})
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



router.post('/submitOrder', (req, res) => {
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

    knex({ od: 'OrderDetails' })
        .where(build => {
            build.where('od.orderID', orderID).andWhere('od.statusID', 1)
        })
        .join({ ip: 'InventoryProduct' }, function () {
            this.on('ip.productID', 'od.productID').andOn('ip.inventoryID', 'od.inventoryID')
        })
        .update({ 'ip.quantity': knex.raw('?? + ??', ['ip.quantity', 'od.quantity']) })
        .then(result => {
            res.sendStatus(202)
        }).catch(err => { res.send(err) })
})
 



module.exports = router