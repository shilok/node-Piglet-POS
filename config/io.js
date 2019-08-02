const httpsServer = require('./httpServer')
const io = require('socket.io')(httpsServer);

const knex = require('../knex')

io.on('connection', socket => {
  console.log(`Connected: ${socket.id}`)
  socket.on('CustomerSearch', data => {
    console.log(data)
    if (data.length > 2){
      knex('Customer').where(builder => {
        builder.where('lastName', 'like', `%${data}%`).orWhere('firstName', 'like', `%${data}%`)
      })
      .then(res => {
        io.sockets.emit('CustomerSearchReplay', {customers: res})
      })
    }
  })
});

module.exports = io