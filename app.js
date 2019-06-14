const express = require('express')
const https = require('https')
const fs = require('fs');
//
const path = require('path');
var bodyParser = require('body-parser');
// var knex = require('./keys/knexfile');
const app = express()


// const privateKey = fs.readFileSync('/etc/letsencrypt/live/piglet-pos.com/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/piglet-pos.com/cert.pem', 'utf8');
// const ca = fs.readFileSync('/etc/letsencrypt/live/piglet-pos.com/chain.pem', 'utf8');

// const credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ca: ca
// };

app.use(express.json())

// app.use('/api/insert', require('./routes/crud/insert'))
// app.use('/api/testing', require('./routes/crud/testing'))
// app.use('/api/customer', require('./routes/crud/customer'))



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`HTTPS Server running on port ${PORT}`)})

// const httpsServer = https.createServer(credentials, app);

// httpsServer.listen(PORT, () => {console.log(`HTTPS Server running on port ${PORT}`)})
