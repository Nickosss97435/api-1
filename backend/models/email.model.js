// Email.js
const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  recipients: [String],
  subject: String,
  body: String,
  date: { type: Date, default: Date.now }
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
