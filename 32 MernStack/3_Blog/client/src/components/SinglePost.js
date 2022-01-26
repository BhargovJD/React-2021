import React from 'react';
import Sidebar from './Sidebar';
import Single from './Single';

export default function SinglePost() {
  return <div>
      <div class="container">
  <div class="row">
    <div class="col-md-4">
        <br></br>
      <Sidebar/>
    </div>
    <div class="col-md-8">
        <br></br>
        <Single/>
    </div>

  </div>
</div>
  </div>;
}
