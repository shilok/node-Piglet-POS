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

const getInventoryProductsTest = (inventoryID) => {
    return knex({ ip: 'InventoryProduct' })
        .join({ p: 'Product' }, 'p.id', 'ip.productID')
        .leftJoin({imgP: 'ProductImage'}, 'imgP.productID', 'ip.productID')
        .leftJoin({img: 'Image'}, 'img.id', 'imgP.imageID')
        .leftJoin({pTag: 'ProductTag'}, 'pTag.productID', 'p.id')
        .leftJoin({tag: 'Tag'}, 'tag.id', 'pTag.tagID')
        .where('ip.inventoryID', inventoryID)
        .select({name: 'p.name', description: 'p.description', minPrice: 'p.minPrice', displayPrice: 'p.displayPrice',
                quantity: 'ip.quantity', stockID: 'ip.inventoryID', productID: 'p.id',
                imageUrl: knex.raw('GROUP_CONCAT(DISTINCT img.url)')
                ,tags: knex.raw('GROUP_CONCAT(DISTINCT tag.name)')
            })
        .groupBy('ip.productID', 'ip.quantity')
}


router.post('/getProductsTest', passport.authenticate('jwt', { session: false }), (req, res) => {

    const empID = req.user.id
    const products = [] 

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

    if (req.body.stockID){
        const stockID = req.body.stockID
        getInventoryProductsTest(stockID).then(results => {
            console.log(results.length)
            results.forEach(p => {
                const product = {
                    name: p.name,
                    description: p.description,
                    minPrice: p.minPrice,
                    displayPrice: p.displayPrice,
                    quantity: p.quantity,
                    stockID: p.stockID,
                    productID: p.productID
                }
                if (p.imageUrl){
                    product.imagesURL = [p.imageUrl]
                }
                if (p.tags){
                    product.tags = [p.tags]
                }
                products.push(product)
                
            });
            return res.json({success: true, status: 'products', employee: employee, products: products})
        }).catch(err => {
            return res.json({success: false, status: 'error', msg: err})
        })
        return
    }

    const emp = {}
    let stockID = 0
  
    
    getEmployeeStores(empID).then(stores => {
        if (!stores) {
            return res.json({success: false, status: 'Empty'})
        }
        if (stores.length > 1) {
            const str = []
            stores.forEach(store => {
                str.push({id: store.id, name: store.name, stockID: store.stockInventoryID})
            });
            return res.json({success: true, status:'stores', employee: employee, stores: str})
        }
 

        stockID = stores[0].stockInventoryID

        getInventoryProductsTest(stockID).then(results => {
            console.log(results.length)
            results.forEach(p => {
                const product = {
                    name: p.name,
                    description: p.description,
                    minPrice: p.minPrice,
                    displayPrice: p.displayPrice,
                    quantity: p.quantity,
                    stockID: p.stockID,
                    productID: p.productID
                }
                if (p.imageUrl){
                    product.imagesURL = [p.imageUrl]
                }
                if (p.tags){
                    product.tags = [p.tags]
                }
                products.push(product)
                
            });
            return res.json({success: true, status: 'products', employee: employee, products: products})
        }).catch(err => {
            return res.json({success: false, status: 'error', msg: err})
        })
    })
})

 
router.post('/getProducts', passport.authenticate('jwt', { session: false }), (req, res) => {

    const empID = req.user.id
    const products = [] 


    if (req.body.stockID){
        const stockID = req.body.stockID
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
            return res.json({success: true, status: 'products', products: products})
        }).catch(err => {
            return res.json({success: false, status: 'error', msg: err})
        })
        return
    }

    const emp = {}
    let stockID = 0
  
    
    getEmployeeStores(empID).then(stores => {
        if (!stores) {
            return res.json({success: false, status: 'Empty'})
        }
        if (stores.length > 1) {
            const str = []
            stores.forEach(store => {
                str.push({id: store.id, name: store.name, stockID: store.stockInventoryID})
            });
            return res.json({success: true, status:'stores', stores: str})
        }
 

        stockID = stores[0].stockInventoryID

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
            return res.json({success: true, status: 'products', products: products})
        }).catch(err => {
            return res.json({success: false, status: 'error', msg: err})
        })
    })
})


router.post('/getStoreProducts', passport.authenticate('jwt', { session: false }), (req, res) => {

    const products = [] 
    const stockID = req.body.stockID

    if (!stockID){
        return res.json({success: false, status: 'error', msg: 'Stock ID empty!'})
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
            return res.json({success: true, status: 'products', products: products})
        }).catch(err => {
            return res.json({success: false, status: 'error', msg: err})
        })
})



module.exports = router