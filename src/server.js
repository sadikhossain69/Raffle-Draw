const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const colors = require('colors')

const app = express()

// Middleware
app.use([morgan('dev'), cors(), express.json()])

app.get('/health', (req, res) => {
    res.status(400).json({ message: 'success' })
})

// Error Handle
app.use((req, res, next) => {
    const error = new Error("Resource Not Found")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    if (error.status) {
        return res.status(error.status).json({
            message: error.message
        })
    }
    res.status(500).json({ message: "Something Went Wrong" })
})

// Port
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Raffle Draw app listening at http://localhost:${port}`.blue)
})  