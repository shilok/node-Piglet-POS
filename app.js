const express = require('express')
const https = require('https')
const fs = require('fs');

const app = express()

app.use(express.json())

const privateKey = fs.readFileSync('/etc/letsencrypt/live/piglet-pos.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/piglet-pos.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/piglet-pos.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
const httpsServer = https.createServer(credentials, app);



app.get('/', (req, res) => {
    res.send("Hey you")
})

app.use('/api/testing', require('./routes/crud/testing'))
app.use('/api/testing', require('./routes/crud/customer'))



const PORT = process.env.PORT || 5000;


httpsServer.listen(PORT, () => {console.log(`HTTPS Server running on port ${PORT}`)})
