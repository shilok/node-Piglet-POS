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


httpsServer.listen(PORT, () => { console.log(`HTTPS Server running on port ${PORT}`) })
