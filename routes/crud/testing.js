var express = require('express')
var router = express.Router()

const knex = require('../../knex')

const getEmployee = (empID) => {
    return knex('Employee').where('id', empID)
}

const getStore = (storeID) => {
    return knex('Store').where('id', storeID)
}

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





router.post('/getProducts', (req, res) => {
    const empID = req.body.empID
    const emp = {}
    let stockID = 0

    const jsonData = { employee: {}, products: [] }

    getEmployeeStores(empID).then(stores => {
        if (stores.length > 1) {
            res.send('More than one')
        } else if (stores.length == 1) {
            setEmployeeToJson(emp, stores)
            jsonData.employee = emp
            stockID = stores[0].stockInventoryID
            getInventoryProducts(stockID).then(products => {
                products.forEach(p => {
                    const product = {
                        name: p.name,
                        description: p.description,
                        minPrice: p.minPrice,
                        displayPrice: p.displayPrice,
                        quantity: p.quantity,
                        stockID: p.inventoryID,
                        productID: p.productID
                    }
                    jsonData.products.push(product)
                });
                res.send(jsonData)
                console.log(jsonData)
            })

        } else {
            res.send('Employee not connected to any Store')
        }
    })
})




module.exports = router