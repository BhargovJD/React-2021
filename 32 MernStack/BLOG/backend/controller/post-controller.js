import Post from '../Schemas/post-schema.js'

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
    try{
        let posts = await Post.find({})
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
        await new Post.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json("Blog updated successfully")
    }
    catch(error){
        res.status(500).json(error)
    }

}