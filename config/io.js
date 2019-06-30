const httpsServer = require('./httpServer')
const io = require('socket.io')(httpsServer);


module.exports = io