import React from 'react';
import Sidebar from './Sidebar';
import Posts from './Posts';

export default function Main() {
  return <div>
      <div class="container">
  <div class="row">
    <div class="col-md-4">
        <br></br>
      <Sidebar/>
    </div>
    <div class="col-md-8">
        <br></br>
      <Posts/>
    </div>

  </div>
</div>
  </div>;
}
