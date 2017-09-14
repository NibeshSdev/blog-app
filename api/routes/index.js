'use strict';

module.exports = function(app){
    var postController = require('../controllers/posts');

    app.route('/api/posts')
        .get(postController.getPosts)
        .post(postController.createPost);

    app.route('/api/posts/:postId')
        .get(postController.getPostById)
        .put(postController.updatePostById)
        .delete(postController.deletePostById);
};