import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({post}) {
  const pictureUrl = post.picture || "https://upload.wikimedia.org/wikipedia/commons/9/9d/Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg"
  return <div>
      <div class="card" style={{width: '30rem'}}>
  {/* <img src={pictureUrl} class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{post.title}</h5>
    <div><span><b>Author:</b> {post.username}</span>  <span><b>Category:</b>{post.categories}</span></div>
    <p class="card-text">{post.description}</p>
    <Link to={`/blog-detail/${post._id}`}><button type="button" class="btn btn-primary">Read more</button>
    </Link>

  </div>
</div>
  </div>;
}
