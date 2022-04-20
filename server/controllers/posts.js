import PostMessage from '../models/postMessage.js';

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getPosts, createPost };
