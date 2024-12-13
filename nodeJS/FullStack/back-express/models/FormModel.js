const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: '无名'
    },
    book: {
        type: String,
        required: true,
        default: '你猜猜是什么书'
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        enum: [15, 28, 36, 49]
    },
    imageUserUrl: String,
    data: {
        type: Date,
        default: Date.now
    }
})

const FormModel = mongoose.model('form-books', Schema)

module.exports = FormModel