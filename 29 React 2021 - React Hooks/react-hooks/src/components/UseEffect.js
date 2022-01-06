import React,{useEffect, useState} from 'react'
import axios from "axios";

export default function UseEffect() {
    const [data, setData] = useState("");


    // useEffect(()=>{
    //     console.log("Hello world");
    // })

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
            // console.log(response.data);
            setData(response.data[0].email);
        });
    },[]);

    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}
