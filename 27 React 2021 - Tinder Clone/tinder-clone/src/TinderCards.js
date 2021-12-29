import React from 'react'
import './TinderCard.css'
import { useState } from 'react'
import TinderCard from 'react-tinder-card';


function TinderCards() {
    const [people, setPeople] = useState([
        {
        name:'Elon Mask',
        url:'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
        },

        {
            name:'Mark Zuckerberg',
            url:'https://media.wired.com/photos/5ed6891ed9fb171733fd7840/master/pass/Ideas-Zuckerberg-1200875675.jpg',
            },
]);

// console.log(people);

const swiped =(direction, nameToDelete)=>{
    console.log("Removing "+ nameToDelete)
}

const outOffFrame=(name)=>{
    console.log(name+" Left the screen")
}

    return (
        <div className='tinder_cards'>

            <div className='tinderCards_cardContainer'>
                    {people.map((person)=>(

                        <TinderCard className='swipe'
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=>swiped(dir, person.name)}
                        onCardLeftScreen={()=>outOffFrame(person.name)}
                        >
                            <div style={{backgroundImage:`url(${person.url})`}}className='card'>
                            <h3>{person.name}</h3>
                            </div>


                        </TinderCard>

                    ))}
            </div>

        </div>
    )
}

export default TinderCards
