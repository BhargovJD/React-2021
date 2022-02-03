import React from 'react';
import UserItem from './UserItem';

export default function UsersList({item}) {

      if(item.length===0){
        return (
            <div>
                <h2>No users found...</h2>
            </div>
        )
      }

      else {
          return(
            <ul className="list-group">
            {
                item.map(
                    user=>(
                        <UserItem
                        key={user.id}
                        id={user._id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places.length}
                        />
                    )
                )
            }
        </ul>
          )

      }

}
