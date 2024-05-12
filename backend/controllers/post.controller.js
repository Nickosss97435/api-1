const PostModel = require('../models/post.model');
const { param } = require('../routes/post.routes');


// lire un Post
module.exports.getPost = async (req, res) => {
    const post = await PostModel.find();
    res.status(200).json(post)
};

// Envoyer un nouveau post
module.exports.setPosts = async (req, res) => {
    if (!req.body.message) {
        res.status(400).json({message: "Merci d'ajouter un message"})
    }

    const post = await PostModel.create({
        message: req.body.message,
        author: req.body.author
    })
    res.status(200).json(post)
};

// Modifier un Post
module.exports.editPost = async (req, res) => {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
        res.status(400).json({ message: "Ce post n'existe pas !"})
    }

    const updatePost = await PostModel.findByIdAndUpdate(
        post,
        req.body,
        {new: true,

        }
    );

    res.status(200).json(updatePost);
};

// Supprimer un Post
module.exports.deletePost = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: "Ce post n'existe pas !" });
        }

        await PostModel.deleteOne({ _id: req.params.id });
        return res.status(200).json({ message: "Message supprimé, id: " + req.params.id });
    } 
    
    catch (error) {
        console.error("Erreur lors de la suppression du post :", error);
        return res.status(500).json({ message: "Erreur serveur lors de la suppression du post" });
    }
};

// Ajouter un Like
module.exports.likePost = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { likers: req.body.userId} },
            { new: true }
        ).then((data)=> res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};

// Supprimer un Like
module.exports.dislikePost = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { likers: req.body.userId} },
            { new: true }
        ).then((data)=> res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};