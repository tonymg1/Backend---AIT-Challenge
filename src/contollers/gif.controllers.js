// const postModel = require('./postModel')
const gifModel = require("../models/gifModel")



//CRUD Applications    

const newPost = async (req, res)=>{
    const {title, content} = req.body
    try {
        const newPosti = await gifModel.create({title, content})
        res.json(newPosti)
    } catch (error) {
        res.status(500).send(error)
    }
}

const showPost = async(req, res)=>{
    try {
        const posts = await gifModel.find()
        res.json(posts)
    } catch (error) {
        res.status(500).send(error)
    }
}



// app.get('/:id', async(req, res)=>{
//     const {id} = req.params
    
//     try {
//         const post = await postModel.findById(id)
//         res.json(post)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// app.put("/:id", async(req, res)=>{
//     const {id} = req.params
//     const {title, content} = req.body
//     try {
//         const post = await postModel.findByIdAndUpdate(id, {title, content})
//         res.json(post)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// app.delete("/:id", async(req, res)=>{
//     const {id} = req.params
//     const {title, content} = req.body
//     try {
//         const post = await postModel.findByIdAndDelete(id, {title, content})
//         res.json('Deleted successfully')
//     } catch (error) {
        
//     }
// })

module.exports = {newPost, showPost}