const https = require('https')
const credentials = require('./credentials')
const app = require('./app')
 
const httpsServer = https.createServer(credentials, app);


module.exports = httpsServer