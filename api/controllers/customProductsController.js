
const CustomProduct = require('../models/CustomProduct')

// Get all CustomProducts
module.exports.list = function (req, res, next) {
    CustomProduct.find(
        {},
        (err, customProducts) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error getting records.',
                })
            }
            return res.json(customProducts)
        }
    )
}

// Get one CustomProduct
module.exports.show = function (req, res) {
    const CustomProductId = req.params.id
    CustomProduct.findOne({ _id: CustomProductId }, function (err, customProduct) {
        if (err) {
            return res.status(500).json({
                message: 'Error getting CustomProduct.',
            })
        }
        if (!customProduct) {
            return res.status(404).json({
                message: 'Inexistent CustomProduct.',
            })
        }
        return res.json(customProduct)
    })
}
// Create
module.exports.create = function (req, res) {
        // initialize record
        const customProduct = new CustomProduct({
            productId: req.body.productId,
            productName: req.body.productName,
            price: req.body.price,
            mock1: req.body.mock1,
            img1: req.body.img1
        })
        // save record
        customProduct.save(function (err, customProduct) {
            if (err) {
                return res.status(500).json({
                    message: 'Error saving record',
                    error: err
                });
            }
            return res.json(201,{
                message: 'saved',
                _id: customProduct._id
            });
        })
    }


