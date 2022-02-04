import Post from '../Schemas/post-schema.js'
// import Posts from './../../frontend/src/components/Posts';
// import { categories } from './../../frontend/src/constants/data';

// Create post
export const createPost = async (req,res)=>{
    console.log(req.body)
    try{
        const post = await new Post(req.body)
        post.save()

        res.status(200).json("Blog saved successfully")
    }
    catch(error){
        res.status(500).json(error)
    }

}

// Get all posts
export const getAllPosts = async (req,res) =>{
    const username = req.query.username;
    const category = req.query.category;
    let posts;

    try{
        if(username)
            posts = await Post.find({username:username})
        else if(category)
            posts = await Post.find({categories:category})
        else
            posts = await Post.find({})

        res.status(200).json(posts)
    }
    catch(error){
        res.status(500).json(error)
    }
}

// Get a post
export const getPost = async (req,res) =>{
    try{
        let post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch(error){
        res.status(500).json(error)
    }
}

// edit a post
export const editPost = async (req,res)=>{
    // console.log(req.body)
    try{
        await  Post.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json("Blog updated successfully")
    }
    catch(error){
        res.status(500).json(error)
    }

}

// delete a post
export const deletePost = async (req,res)=>{
    // console.log(req.body)
    try{
        await  Post.findByIdAndDelete(req.params.id)
        res.status(200).json("Blog deleted successfully")
    }
    catch(error){
        res.status(500).json(error)
    }

}

