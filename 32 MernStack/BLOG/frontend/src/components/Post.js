import React from 'react';
import { Link } from 'react-router-dom';

export default function Post() {
  return <div>
      <div class="card" style={{width: '30rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/blog-detail"><button type="button" class="btn btn-primary">Read more</button>
    </Link>

  </div>
</div>
  </div>;
}
