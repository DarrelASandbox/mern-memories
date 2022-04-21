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

const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { ...post, id },
    { new: true }
  );
  res.json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  await PostMessage.findByIdAndDelete(id);
  res.json({ message: 'Memory lost!' });
};

const likePost = async (req, res) => {
  const { id } = req.params;
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatePost);
};

export { getPosts, createPost, updatePost, deletePost, likePost };
