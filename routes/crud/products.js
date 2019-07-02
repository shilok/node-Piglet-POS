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

const setEmployeeToJson = (emp, data) => {
    emp.id = data[0].id
    emp.firstName = data[0].firstName
    emp.lastName = data[0].lastName
    emp.email = data[0].email
    emp.birthday = data[0].birthday
    emp.hireDate = data[0].hireDate
    emp.salaryTypeID = data[0].salaryTypeID
    emp.commissionTypeID = data[0].commissionTypeID
    emp.country = data[0].country
    emp.state = data[0].state
    emp.city = data[0].city
    emp.street = data[0].street
    emp.line1 = data[0].line1
    emp.line2 = data[0].line2
    emp.image = data[0].image
    emp.notes = data[0].notes
    emp.hash = data[0].hash
}

 
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
            return res.json({success: true, status: 'stores', products: products})
        }).catch(err => {
            return res.json({success: false, status: 'error', msg: err})
        })
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
            return res.json({success: true, status: 'store', products: products})
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
            return res.json({success: true, status: 'store', products: products})
        }).catch(err => {
            return res.json({success: false, status: 'error', msg: err})
        })
})



module.exports = router