import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.route('/').get(getPosts).post(createPost);
router.patch('/:id', updatePost);

export default router;
