import dp from "../images/dp.jpg"
import axios from 'axios'
import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, }  from 'react-router-dom'


export default function Sidebar() {
  const [cat, setCat] = useState([])


  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get('http://localhost:5000/api/categories')
      // console.log(res)
      setCat(res.data)
    }
    getCats()
  },[])


  return <div >

    <div className='text-center'>
        <hr></hr>
    <h5>About me</h5>
        <hr></hr>
        <a class="navbar-brand" href="#">
      <img class="rounded" src={dp} alt="" width="200" height="200"/>
    </a>
    </div>

    <div>
    <p class='text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </div>
    <hr>
    </hr>
    <h5 className='text-center'>Explore Categories</h5>
    <hr></hr>

    <div class="container text-center">

  <div class="row">

  {cat.map((c)=>(
          <Link to={`/?cat=${c.name}`}> {c.name}</Link>

    ))}



  </div>
</div>

  </div>;
}
