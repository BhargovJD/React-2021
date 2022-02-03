import React from 'react';
import Categories from './Categories';
import Posts from './Posts';

export default function Home() {

  return <div>
      <br></br>
      <div class="container">
  <div class="row">
    <div class="col">
      <Categories/>
    </div>
    <div class="col">
      <Posts/>
    </div>

  </div>
</div>
  </div>;
}
