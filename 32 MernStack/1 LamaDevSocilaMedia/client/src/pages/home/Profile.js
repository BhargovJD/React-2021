import React from 'react';
import Posts from './../../components/Posts';
import OnlineFriends from './../../components/OnlineFriends';

export default function Profile() {
  return <div>
  <div class="d-flex justify-content-between bd-highlight mb-3">
<div class="p-2 bd-highlight">
<h4>Explore</h4>
<ul class="list-group">
<div class="list-group">
<a href="#" class="list-group-item list-group-item-action">Feed</a>
<a href="#" class="list-group-item list-group-item-action">Chats</a>
<a href="#" class="list-group-item list-group-item-action">Videos</a>
<a href="#" class="list-group-item list-group-item-action">Bookmarks</a>
<a href="#" class="list-group-item list-group-item-action">Jobs</a>
<a href="#" class="list-group-item list-group-item-action">Events</a>

</div>
</ul>
</div>
<div class="p-2 bd-highlight">
  <h3>My profile</h3>
  {/* Upload */}
  <form>
<div class="mb-3">
<label for="" class="form-label">Whats in your mind?</label>
<input type="" class="form-control" id="" aria-describedby=""/>
</div>

<div class="container">
<div class="row">
<div class="col">
<div class="input-group mb-3">
<input type="file" class="form-control" id="inputGroupFile02"/>
<label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>

</div>
<div class="col">
<div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="btn btn-primary">Tag</button>
<button type="button" class="btn btn-warning">Location</button>
<button type="button" class="btn btn-danger">Feelings</button>
</div>
</div>

<div class="col">
<div class="btn-group" role="group" aria-label="Basic example">
<button type="submit" class="btn btn-primary">Share</button>

</div>
</div>

</div>
</div>




</form>

<hr></hr>

<Posts/>

</div>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-6">Profile Information</h1>
    <p class="lead">Bhargov</p>
    <p class="lead">Age</p>
    <p class="lead">Relationship</p>
  </div>
</div>
{/* <OnlineFriends/> */}
</div>
</div>;
}
