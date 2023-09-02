const Post = require('../models/postModel');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({"message": 'Post found!', "data:": posts});
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = await Post.create({ title, content });
    res.status(201).json({"message": 'Post created!', "data:": post});
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.json({"message": 'Post found!', "data:": post});
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

exports.updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found!' });
    }
    post.title = title;
    post.content = content;
    await post.save();
    res.json({"message": 'Post updated!', "data:": post});
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

exports.deletePostById = async (req, res) => {
  const { id } = req.params;
  try {
      const post = await Post.findByIdAndRemove(id);
      if (!post) {
          return res.status(404).json({ message: 'Post not found!' });
      }
      res.json({ message: 'Post deleted!', deletedData: post });
  } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error });
  }
}