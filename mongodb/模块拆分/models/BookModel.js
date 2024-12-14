

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: '无名书'
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        enum: [12, 45, 78, 96, 30]
    },
    is_hot: Boolean
},{})

const BookModel = mongoose.model('books',Schema)

module.exports = BookModel