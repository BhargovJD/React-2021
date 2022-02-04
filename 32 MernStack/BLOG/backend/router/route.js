import express from 'express'
import { createPost,getAllPosts,getPost,editPost,deletePost } from '../controller/post-controller.js'

// import {uploadFile} from '../controller/file-controller.js'
// import upload from '../utils/upload.js'

const router = express.Router()

// Create post
router.post('/create',createPost)

// Get all posts
router.get('/posts',getAllPosts)

// Get a post
router.get('/post/:id',getPost)

// Update a post
router.post('/update/:id',editPost)

// Delete a post
router.delete('/delete/:id',deletePost)

// upload file
// router.post('/delete/:id',upload.single('file'), uploadFile)

export default router