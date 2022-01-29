import React from 'react';
import PlaceItem from './PlaceItem';

export default function PlaceList(props) {
    if(props.items.length === 0){
        return (<div>
            <h2>No place found. Maybe create one...</h2>
            <button>Create one</button>
        </div>
        );
    }

    else
    return(
        <ul  className="list-group">
        {props.items.map((place)=>(
            <PlaceItem key={place.id} id={place.id} image={place.imageUrl} title={place.title} desc={place.desc} add={place.add} creatorId={place.creatorId} coordinates={place.location} />
        ))}
        </ul>
    )


}
