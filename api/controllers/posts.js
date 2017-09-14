'use strict';

var mongoose = require('mongoose'),
    Post = mongoose.model('Posts');

exports.getPosts = function(req, res){
    Post.find({}, function (err, posts) {
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).json(posts);
    });
};

exports.createPost = function (req, res) {
    var newPost = new Post(req.body);
    newPost.save(function(err, post){
        if(err){
            return res.status(500).send(err);
        }
        return res.status(201).json(post);
    });
};

exports.getPostById = function (req, res) {
    Post.findById(req.params.postId, function (err, post) {
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).json(post);
    });
};

exports.updatePostById = function (req, res) {
    Post.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true},function(err, post){
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).json(post);
    });
};

exports.deletePostById = function (req, res) {
    Post.remove({_id: req.params.postId}, function (err, post) {
        if(err){
            return res.status(500).send(err);
        }
        return res.json({message: 'Post successfully deleted.'});
    });
};