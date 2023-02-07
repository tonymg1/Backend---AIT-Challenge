const mongoose = require('mongoose')
const gifSchema = mongoose.Schema({
    title: String,
    content: String,
}, {
    timestamps: true,

})

const gifModel = mongoose.model('gif', gifSchema)

module.exports = gifModel