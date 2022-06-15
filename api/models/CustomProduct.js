const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomProduct = new Schema({
    // CustomProduct information
    productId: {type: String,required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    mock1: { type: String, required: true },
    img1: {
        data: Buffer,
        contentType: String,
    },
    date: { type: Date, required: true, default: Date.now() },
});
module.exports = mongoose.model('CustomProduct', CustomProduct)

