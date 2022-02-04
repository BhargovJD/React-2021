import React from 'react';
import {categories} from '../../src/constants/data'
import { Link } from 'react-router-dom';
export default function Categories() {
  return <div>

      <Link to="/create"><button type="button" class="btn btn-success">Create a blog</button></Link>


      <table class="table">
  <thead>
    <tr>
      <th scope="col">Categories</th>
    </tr>
  </thead>
  <tbody>



     {
         categories.map(cat=>(
            <tr>
              <Link to={`/?category=${cat}`}><td>{cat}</td></Link>

             </tr>
         ))
     }


  </tbody>
</table>

  </div>;
}
