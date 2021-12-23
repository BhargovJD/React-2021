import React,{useState, useEffect} from 'react'
import axios from 'axios'


export default function Movies() {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("");

    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
            setMovie(response.data);
        }
        getData();
    },[number]);


    const handleChange = (e)=>{
        setNumber(e.target.value);
    }
    return (
        <div>
            <h1>Pick a Star Wars Movie</h1>
            <h2>Movie name: {movie.title}</h2>
            <h2>Director: {movie.director}</h2>
            <select value={number} onChange={handleChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                
            </select>
        </div>
    )
}
