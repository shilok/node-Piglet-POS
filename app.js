const express = require('express')
const https = require('https')
const fs = require('fs');

const app = express()
const PORT = process.env.PORT || 5000;

const credentials = require('./credentials')

app.use(express.json())



const httpsServer = https.createServer(credentials, app);



app.get('/', (req, res) => {
    res.send("Hey you")
})

app.use('/api/testing', require('./routes/crud/testing'))
app.use('/api/testing', require('./routes/crud/customer'))
app.use('/api/testing', require('./routes/crud/employee'))





httpsServer.listen(PORT, () => {console.log(`HTTPS Server running on port ${PORT}`)})
