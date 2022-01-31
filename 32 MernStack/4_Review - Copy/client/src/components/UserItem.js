import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, }  from 'react-router-dom'


export default function UserItem(props) {
    console.log(props.image)
  return <div>
        <li className="list-group-item">
            <div>{props.name}</div>

            <Link to={`${props.id}/places`}>
           <img src={props.image} className="img-thumbnail rounded-circle" alt={props.image}/>
           </Link>


           <div>{props.placeCount} {props.placeCount===1?'Place':'Places'}</div>
        </li>
  </div>;
}


