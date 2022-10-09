const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// Middleware
app.use([morgan('dev'), cors(), express.json()])

