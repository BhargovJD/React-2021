import express from 'express'
import { createPost,getAllPosts,getPost,editPost } from '../controller/post-controller.js'

const router = express.Router()

// Create post
router.post('/create',createPost)

// Get all posts
router.get('/posts',getAllPosts)

// Get a post
router.get('/post/:id',getPost)

// Update a post
router.post('/update/:id',editPost)


export default router