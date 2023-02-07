'use strict';

const GifModel = require('../models/gif.model');

const newPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newPosti = await GifModel.create({ title, content });
        await newPosti.save();
        res.json(newPosti);
    } catch (error) {
        res.status(500).send(error);
    }
};

const showPosts = async (_, res) => {
    try {
        const posts = await GifModel.find();
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
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

module.exports = { newPost, showPosts, showPostById, deletePostById };
