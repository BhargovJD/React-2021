import axios from 'axios'

const URL = "http://localhost:8000"

// Create post
export const createPost = async (post)=>{
    try{
       return await axios.post(`${URL}/create`,post)
    }
    catch(error){
        console.log("Error while calling create post api", error)
    }
}

// Get all posts
export const getAllPosts = async ()=>{
    try{
       let response =  await axios.get(`${URL}/posts`)
       return response.data;
    }
    catch(error){
        console.log("Error while calling calling get all posts api", error)
    }
}

// Get a post
export const getPost = async (id)=>{
    try{
       let response =  await axios.get(`${URL}/post/${id}`)
       return response.data;
    }
    catch(error){
        console.log("Error while calling calling get a posts api", error)
    }
}

// Update a post
export const editPostPost = async (id,post)=>{
    try{
        await axios.post(`${URL}/update/${id}`,post)
    }
    catch(error){
        console.log("Error while calling edit post api", error)
    }
}