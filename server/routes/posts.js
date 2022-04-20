import express from 'express';
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
  likePost,
} from '../controllers/posts.js';

const router = express.Router();

router.route('/').get(getPosts).post(createPost);
router.route('/:id').patch(updatePost).delete(deletePost);
router.patch('/:id/likePost', likePost);

export default router;
