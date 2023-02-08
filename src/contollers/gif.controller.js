'use strict';

const { GifModel, CATEGORIES } = require('../models/gif.model');

const newPost = async (req, res) => {
    const { title, content, category } = req.body;
    try {
        const newPosti = await GifModel.create({ title, content, category });
        await newPosti.save();
        res.json(newPosti);
    } catch (error) {
        res.status(500).send(error);
    }
};

const showPosts = async (req, res) => {
    const category = req.query.category;
    try {
        const params = {};
        if (category) {
            params.category = category;
        }
        const posts = await GifModel.find(params);
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
};

const showCategories = async (_, res) => {
    res.json(CATEGORIES);
};

const showPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const posts = await GifModel.find({ _id: id });
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deletePostById = async (req, res) => {
    const { id } = req.params;
    try {
        const posts = await GifModel.findOneAndDelete({ _id: id });

        res.status(200).send({ status: true, data: posts });
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message });
    }
};

module.exports = { newPost, showPosts, showCategories, showPostById, deletePostById };
