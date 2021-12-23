import React, {useState} from 'react'

export default function Toggler1() {
    const [isHappy, setIsHappy] = useState(true);
    const [isBroken, setIsBroken] = useState(true);

    const toogleHappy = () =>{
        setIsHappy(!isHappy);
    };

    const toogleBroken = () =>{
        setIsBroken(!isBroken);
    };

    return (
        <div>
            <h1>Without Custom Hook file</h1>
            <h1 onClick={toogleHappy}> {isHappy ?"🙂" : "😢" }</h1>
            <h2 onClick={toogleBroken}> {isBroken ?"💔" : "💟" }</h2>
        </div>
    )
}





