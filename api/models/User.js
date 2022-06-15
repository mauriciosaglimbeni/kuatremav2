const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  role: {type:'String', required: true, enum: ['user','admin'], default: 'user'}
});
module.exports = mongoose.model('User', User)