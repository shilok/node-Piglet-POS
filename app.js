const express = require('express')
const https = require('https')
const passport = require('passport')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000;

const credentials = require('./credentials')
const httpsServer = https.createServer(credentials, app);
 
 
app.use(express.json())
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)

app.use('/api/testing', require('./routes/crud/products'))
app.use('/api/testing', require('./routes/crud/customer'))
app.use('/api/testing', require('./routes/crud/employee'))
app.use('/api/testing', require('./routes/crud/transaction'))
app.use('/api/users', require('./routes/users'))




httpsServer.listen(PORT, () => { console.log(`HTTPS Server running on port ${PORT}`) })
