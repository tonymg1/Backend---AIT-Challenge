const mongoose = require('mongoose');
const gifSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: Buffer, required: true }
    },
    {
        timestamps: true
    }
);

const GifModel = mongoose.model('gif', gifSchema);

module.exports = GifModel;
