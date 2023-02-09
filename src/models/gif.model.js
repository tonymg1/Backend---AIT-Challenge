'use strict';

const mongoose = require('mongoose');
const CATEGORIES = ['cats', 'anime', 'gamer', 'beer', 'sport', 'music'];
const gifSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: Buffer, required: true },
        category: { type: String, enum: CATEGORIES, required: true }
    },
    {
        timestamps: true
    }
);

const GifModel = mongoose.model('gif', gifSchema);

module.exports = { GifModel, CATEGORIES };
