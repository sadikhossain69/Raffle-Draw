const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const colors = require('colors')

const app = express()

// Middleware
app.use([morgan('dev'), cors(), express.json()])

app.get('/health', (req, res) => {
    res.status(400).json({message: 'success'})
})

// Port
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Raffle Draw app listening at http://localhost:${port}`.blue)
})