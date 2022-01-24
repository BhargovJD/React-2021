import React from 'react';
import { Users } from '../dummyData';

export default function OnlineFriend() {
  return <div>
       <div class="p-2 bd-highlight">
           <h4>Online</h4>
           {Users.map(u=>(
                <ul map={u.id} class="list-group">
                <div class="list-group">
                <img src={u.profilePicture} style={{"height":"40px","width":"40px",}} class="img-circle rounded" alt="Cinque Terre"/>
                <a href="#" class="list-group-item list-group-item-action">{u.username}</a>
              </div>
              <hr></hr>
              </ul>

           ))}

  </div>
  </div>;
}
