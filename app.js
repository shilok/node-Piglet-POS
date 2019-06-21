const express = require('express')
const https = require('https')

const app = express()
const PORT = process.env.PORT || 5000;

const credentials = require('./credentials')
const httpsServer = https.createServer(credentials, app);


app.use(express.json())

app.use('/api/testing', require('./routes/crud/testing'))
app.use('/api/testing', require('./routes/crud/customer'))
app.use('/api/testing', require('./routes/crud/employee'))
app.use('/api/testing', require('./routes/crud/transaction'))



httpsServer.listen(PORT, () => {console.log(`HTTPS Server running on port ${PORT}`)})
