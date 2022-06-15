const { Router } = require('express')

const router = Router({ mergeParams: true })
// Initialize Controller
const customProductsController = require('../controllers/customProductsController')
// Get All
router.get('/customProducts', customProductsController.list)
// Get One
router.get('/customProducts/:id', customProductsController.show)
// Create
router.post('/customProducts', customProductsController.create)

module.exports = router