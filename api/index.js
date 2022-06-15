const express = require('express')
// eslint-disable-next-line no-unused-vars
const db = require('./db')
// Create express instancee
const app = express()
// Init body-parser options (inbuilt with express)
app.use(express.json({
  limit: '50mb'
}))
app.use(express.urlencoded({ extended: true }))
// Require & Import API routes
const user = require('./routes/users')
const product = require('./routes/products')
const customProduct = require('./routes/customProducts')
// Use API Routes
app.use(user)
app.use(product)
app.use(customProduct)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}