import React from 'react';
import Modal from './Modal';

export default function PlaceItem(props) {
  return <div>
      <Modal/>
      <li  className="list-group-item">
          <div>
          <img src={props.image} className="img-thumbnail" alt={props.title}/>
          <h2>{props.title}</h2>
          <h3>{props.add}</h3>
          <p>{props.desc}</p>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  {/* <button type="button" class="btn btn-success">VIEW ON MAP</button> */}
  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
  VIEW ON MAP
</button>
  <button type="button" class="btn btn-warning">EDIT</button>
  <button type="button" class="btn btn-danger">DELETE</button>
</div>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Google Map</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div>
      <img src={props.image} className="img-thumbnail" alt={props.title}/>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

          </div>

      </li>

  </div>;
}
