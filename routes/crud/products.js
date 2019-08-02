var express = require('express')
var router = express.Router()
const passport = require('passport')

const knex = require('../../knex')

const getEmployeeStores = (empID) => {
    return knex({ emp: 'Employee' }).where('emp.id', empID)
        .join({ storeEmp: 'StoreEmployee' }, 'storeEmp.employeeID', empID)
        .join({ str: 'Store' }, 'str.id', 'storeEmp.storeID')
}

const getInventoryProducts = (inventoryID) => {
    return knex({ ip: 'InventoryProduct' })
        .join({ p: 'Product' }, 'p.id', 'ip.productID')
        .where('ip.InventoryID', inventoryID)
}

const getProductByInventory = (inventoryID) => knex({ ip: 'InventoryProduct' })
    .join({ p: 'Product' }, 'p.id', 'ip.productID')
    .where('ip.inventoryID', inventoryID);

const getTagsByInventory = (inventoryID) => getProductByInventory(inventoryID)
    .leftJoin({ pTag: 'ProductTag' }, 'pTag.productID', 'p.id')
    .leftJoin({ tag: 'Tag' }, 'tag.id', 'pTag.tagID')
    .select({ pID: 'p.id', tags: knex.raw('JSON_ARRAYAGG(tag.name)') })
    .groupBy('ip.productID')

const getProducts = (inventoryID) =>
    getProductByInventory(inventoryID)
        .join({ t: getTagsByInventory(inventoryID) }, 't.pID', 'ip.productID')
        .leftJoin({ imgP: 'ProductImage' }, 'imgP.productID', 'ip.productID')
        .leftJoin({ img: 'Image' }, 'img.id', 'imgP.imageID')
        .select({
            name: 'p.name', description: 'p.description', minPrice: 'p.minPrice', displayPrice: 'p.displayPrice',
            quantity: 'ip.quantity', stockID: 'ip.inventoryID', productID: 'p.id',
            tags: 't.tags',
            imagesURL: knex.raw('JSON_ARRAYAGG(img.url)')
        })
        .groupBy('ip.productID', 'ip.quantity')


router.post('/getProducts', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    const empID = req.user.id

    const employee = {
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        birthday: req.user.birthday,
        salaryTypeID: req.user.salaryTypeID,
        commissionTypeID: req.user.commissionTypeID,
        notes: req.user.notes,
        image: req.user.image,
    }

    if (req.body.stockID) {
        const stockID = req.body.stockID

        getProducts(stockID).then(products => {
            for (const i in products) {
                let tags = JSON.parse(products[i].tags)
                let images = JSON.parse(products[i].imagesURL)

                if (!tags[0]) { delete products[i].tags }
                else { products[i].tags = JSON.parse(products[i].tags) }

                if (!images[0]) { delete products[i].imagesURL } 
                else { products[i].imagesURL = JSON.parse(products[i].imagesURL) }
            }
            return res.json({ success: true, status: 'products', employee: employee, products: products })
        }).catch(err => {
            return next(new Error(err));
        })
        return
    }

    let stockID = 0


    getEmployeeStores(empID).then(stores => {
        if (!stores) {
            return res.json({ success: false, status: 'Empty' })
        }
        if (stores.length > 1) {
            const str = []
            stores.forEach(store => {
                str.push({ id: store.id, name: store.name, stockID: store.stockInventoryID })
            });
            return res.json({ success: true, status: 'stores', employee: employee, stores: str })
        }


        stockID = stores[0].stockInventoryID

        getProducts(stockID).then(products => {
            for (const i in products) {
                let tags = JSON.parse(products[i].tags)
                let images = JSON.parse(products[i].imagesURL)

                if (!tags[0]) { delete products[i].tags }
                else { products[i].tags = JSON.parse(products[i].tags) }

                if (!images[0]) { delete products[i].imagesURL } 
                else { products[i].imagesURL = JSON.parse(products[i].imagesURL) }
            }
            return res.json({ success: true, status: 'products', employee: employee, products: products })
        }).catch(err => {
            return next(new Error(err));
        })
    })
})
 


router.post('/getStoreProducts', passport.authenticate('jwt', { session: false }), (req, res) => {

    const products = []
    const stockID = req.body.stockID

    if (!stockID) {
        return res.json({ success: false, status: 'error', msg: 'Stock ID empty!' })
    }

    getInventoryProducts(stockID).then(results => {
        results.forEach(p => {
            const product = {
                name: p.name,
                description: p.description,
                minPrice: p.minPrice,
                displayPrice: p.displayPrice,
                quantity: p.quantity,
                stockID: p.inventoryID,
                productID: p.productID
            }
            products.push(product)
        });
        return res.json({ success: true, status: 'products', products: products })
    }).catch(err => {
        return next(new Error(err));
    })
})



module.exports = router