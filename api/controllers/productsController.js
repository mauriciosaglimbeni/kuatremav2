const validator = require('express-validator');
const Product = require('../models/Product')

// Get all products
module.exports.list = function (req, res, next) {
  Product.find(
    {},
    (err, products) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting records.',
        })
      }
      return res.json(products)
    }
  )
}

// Get one product
module.exports.show = function (req, res) {
  const productId = req.params.id
  Product.findOne({ _id: productId }, function (err, product) {
    if (err) {
      return res.status(500).json({
        message: 'Error getting product.',
      })
    }
    if (!product) {
      return res.status(404).json({
        message: 'Inexistent product.',
      })
    }
    return res.json(product)
  })
}

// Get all products that are offers
module.exports.listOffers = function (req, res, next) {
  Product.find(
    { isOffer: true },
    (err, products) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting offers.',
        })
      }
      return res.json(products)
    }
  )
}
// Get all products that are releases
module.exports.listReleases = function (req, res, next) {
  Product.find(
    { isFeat: true },
    (err, products) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting offers.',
        })
      }
      return res.json(products)
    }
  )
}
// Get products from each category
// sweats
module.exports.listSweat = function (req, res, next) {
  Product.find(
    { category: 'sweat' },
    function (err, products) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting records.',
        })
      }
      return res.json(products)
    }
  )
}
// t shirt
module.exports.listTee = function (req, res, next) {
  Product.find(
    { category: 'tshirt' },
    function (err, products) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting records.',
        })
      }
      return res.json(products)
    }
  )
}
// accesories
module.exports.listAcc = function (req, res, next) {
  Product.find(
    { category: 'accesories' },
    function (err, products) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting records.',
        })
      }
      return res.json(products)
    }
  )
}
module.exports.create = [
  // validations rules
  validator.body('productName', 'Please enter product name').isLength({ min: 1 }),
  validator.body('ProductName').custom(value => {
    return Product.findOne({ productName: value }).then(product => {
      if (product !== null) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject('name already in use');
      }
    })
  }),

  function (req, res) {
    // throw validation errors
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }
    // initialize record
    const product = new Product({
      productName: req.body.productName,
      artist: req.body.artist,
      price: req.body.price,
      offerPrice: req.body.offerPrice,
      isClothing: req.body.isClothing,
      category: req.body.category,
      sizes: req.body.sizes,
      isOffer: req.body.isOffer,
      isFeat: req.body.isFeat,
      img1: req.body.img1,
      img2: req.body.img2,
      img3: req.body.img3,
      img4: req.body.img4,
      design1: req.body.design1,
      design2: req.body.design2,
      base1: req.body.base1,
      base2: req.body.base2
    })

    // save record
    product.save(function (err, product) {
      if (err) {
        return res.status(500).json({
          message: 'Error saving record',
          error: err
        });
      }
      return res.json({
        message: 'saved',
        _id: product._id
      });
    })
  }
]

// Update
module.exports.update = [

  function (req, res) {
    const productId = req.params.id
    Product.findOne({_id: productId}, function(err, product){
      if(err) {
          return res.status(500).json({
              message: 'Error saving record',
              error: err
          });
      }
      if(!product) {
          return res.status(404).json({
              message: 'No such record'
          });
      }
    
      // initialize record
      product.productName = req.body.productName ? req.body.productName : product.productName;
      product.artist = req.body.artist ? req.body.artist : product.artist;
      product.price = req.body.price ? req.body.price : product.price;
      product.offerPrice = req.body.offerPrice ? req.body.offerPrice : product.offerPrice;
      product.isOffer = req.body.isOffer ? req.body.isOffer : product.isOffer;
      product.isFeat = req.body.isFeat ? req.body.isFeat : product.isFeat;
      product.img2 = req.body.img2 ? req.body.img2 : product.img2;
      product.img3 = req.body.img3 ? req.body.img3 : product.img3;

      // save record
      product.save(function(err, product){
        if(err) {
            return res.status(500).json({
                message: 'Error getting record.'
            });
        }
        if(!product) {
            return res.status(404).json({
                message: 'No such record'
            });
        }
        return res.json(product);
    });
});
}

]