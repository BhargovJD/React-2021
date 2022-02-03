import Post from '../Schemas/post-schema.js'

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