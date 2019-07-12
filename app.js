const express = require('express')
const passport = require('passport')
const cors = require('cors')
const app = require('./config/app')
const PORT = process.env.PORT || 5000;



const httpsServer = require('./config/httpServer')

const io = require('./config/io');


io.on('connection', socket => {
  console.log(`Connected: ${socket.id}`)
});


app.use(cors())
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)

app.use('/api/testing', require('./routes/crud/products'))
app.use('/api/testing', require('./routes/crud/customer'))
app.use('/api/testing', require('./routes/crud/employee'))
app.use('/api/testing', require('./routes/crud/transaction'))
app.use('/api/testing', require('./routes/crud/orders'))
app.use('/api/users', require('./routes/users'))


const knex = require('./knex')

const getProductByInventory = (inventoryID) => knex({ ip: 'InventoryProduct' })
  .join({ p: 'Product' }, 'p.id', 'ip.productID')
  .where('ip.inventoryID', inventoryID);


// getProductByInventory(36).then(results => {
//   console.log(results)
// })

const getTagsByInventory = getProductByInventory(36)
    .leftJoin({ pTag: 'ProductTag' }, 'pTag.productID', 'p.id')
    .leftJoin({ tag: 'Tag' }, 'tag.id', 'pTag.tagID')
    .select({pID: 'p.id', tags: knex.raw('JSON_ARRAYAGG(tag.name)')})
    .groupBy('ip.productID')


    // getTagsByInventory.then(result => {
    //   console.log(result)
    // })

// getProductByInventory(36)
//   .leftJoin({ imgP: 'ProductImage' }, 'imgP.productID', 'ip.productID')
//   .join({ img: 'Image' }, 'img.id', 'imgP.imageID')
//   .select({
//     name: 'p.name', description: 'p.description', minPrice: 'p.minPrice', displayPrice: 'p.displayPrice',
//     quantity: 'ip.quantity', stockID: 'ip.inventoryID', productID: 'p.id',
//     imageUrl: knex.raw('JSON_ARRAYAGG(img.url)')})
//       .groupBy('ip.productID', 'ip.quantity')
//       .then(results => {
//         // console.log(results)
//       })

        // ,tags: knex.raw('GROUP_CONCAT(DISTINCT tag.name)')


// const  ttt =   
// knex({ ip: 'InventoryProduct' })
// .join({ p: 'Product' }, 'p.id', 'ip.productID')
// .leftJoin({imgP: 'ProductImage'}, 'imgP.productID', 'ip.productID')
// .join({img: 'Image'}, 'img.id', 'imgP.imageID')
// .leftJoin({pTag: 'ProductTag'}, 'pTag.productID', 'p.id')
// .join({tag: 'Tag'}, 'tag.id', 'pTag.tagID')
// .where('ip.inventoryID', 36)
// .select({name: 'p.name', description: 'p.description', minPrice: 'p.minPrice', displayPrice: 'p.displayPrice',
//         quantity: 'ip.quantity', stockID: 'ip.inventoryID', productID: 'p.id',
//         imageUrl: knex.raw('JSON_ARRAYAGG(img.url)')
//         // imageUrl: knex.raw('CONCAT(?,(GROUP_CONCAT(JSON_OBJECT(?, img.url))),?)', ['[', 'address', ']'])
//         ,tags: knex.raw('GROUP_CONCAT(DISTINCT tag.name)')
//     })
// .groupBy('ip.productID', 'ip.quantity')
// .then(result => {

//   result.forEach(r => {
//     r.imageUrl
//     console.log(JSON.parse(r.imageUrl))
//     console.log('Breack')
//   });
// })
// .toSQL()

// console.log(ttt)
httpsServer.listen(PORT, () => { console.log(`HTTPS Server running on port ${PORT}`) })
